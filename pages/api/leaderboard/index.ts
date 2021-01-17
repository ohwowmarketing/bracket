import Amplify, { withSSRContext } from 'aws-amplify'
import { listOfficialResults, listEntrys, listLeaderboards } from 'src/graphql/queries'
import { createLeaderboard, updateLeaderboard } from 'src/graphql/mutations'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import config from 'src/aws-exports'
Amplify.configure({
  ...config,
  ssr: true
})

const game = (selection: string | null, official: string | null, points: number) => {
  return official && selection && official === selection ? points : 0
}

const getPoints = async ({ entry, officialResult }) => {
  let points = 0
  points += game(entry.superBowl, officialResult.superBowl, 80)
  points += game(entry.afcConference, officialResult.afcConference, 40)
  points += game(entry.nfcConference, officialResult.nfcConference, 40)
  points += game(entry.afcDivisional1, officialResult.afcDivisional1, 20)
  points += game(entry.afcDivisional2, officialResult.afcDivisional2, 20)
  points += game(entry.nfcDivisional1, officialResult.nfcDivisional1, 20)
  points += game(entry.nfcDivisional2, officialResult.nfcDivisional2, 20)
  points += game(entry.afcWildCard1, officialResult.afcWildCard1, 10)
  points += game(entry.afcWildCard2, officialResult.afcWildCard2, 10)
  points += game(entry.afcWildCard3, officialResult.afcWildCard3, 10)
  points += game(entry.nfcWildCard1, officialResult.nfcWildCard1, 10)
  points += game(entry.nfcWildCard2, officialResult.nfcWildCard2, 10)
  points += game(entry.nfcWildCard3, officialResult.nfcWildCard3, 10)
  return points
}

export default async (req, res) => {
  const { Auth, API } = withSSRContext({ req })

  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      if (!user.signInUserSession.idToken.payload['cognito:groups'].includes('Admin')) {
        throw new Error('Unauthorized')
      }
      return user
    } catch (e) {
      res.statusCode = 401
      res.json({ e })
    }
  }

  const getOfficialResult = async () => {
    try {
      const listOfficialResultsQuery = await API.graphql({
        query: listOfficialResults,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
      console.log(listOfficialResultsQuery.data.listOfficialResults)
      const [officialResult] = listOfficialResultsQuery.data.listOfficialResults.items
      return officialResult
    } catch (e) {
      res.statusCode = 400
      res.json({ e })
    }
  }

  const getOriginalLeaderboards = async () => {
    try {
      const listLeaderboardsQuery = await API.graphql({
        query: listLeaderboards,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
      const originalLeaderboards = listLeaderboardsQuery.data.listLeaderboards.items
      return originalLeaderboards
    } catch (e) {
      res.statusCode = 400
      res.json({ e })
    }
  }

  const getEntries = async ({ limit, token }: { limit: number; token: string | null }) => {
    try {
      const listEntrysQuery = await API.graphql({
        query: listEntrys,
        variables: { limit, nextToken: token },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
      const { items, nextToken } = listEntrysQuery.data.listEntrys
      return { items, nextToken }
    } catch (e) {
      res.statusCode = 400
      res.json({ from: 'getEntries', message: e.message })
    }
  }

  const createLeader = async (username: string, points: number) => {
    try {
      await API.graphql({
        query: createLeaderboard,
        variables: { input: { username: username, points: points } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
    } catch (e) {
      res.statusCode = 400
      res.json({ e })
    }
  }

  const updateLeader = async (id: string, points: number) => {
    try {
      await API.graphql({
        query: updateLeaderboard,
        variables: { input: { id: id, points: points } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
    } catch (e) {
      res.statusCode = 400
      res.json({ e })
    }
  }

  const user = await getUser()

  const officialResultPromise = getOfficialResult()
  const originalLeaderboardsPromise = getOriginalLeaderboards()
  let token: string | null = null
  const perPage: number = 2
  const maxPages: number = 3
  const entries = []

  for (let currPage = 1; currPage < maxPages; currPage++) {
    if (currPage !== 1 && token !== null) {
      const { items, nextToken } = await getEntries({
        limit: perPage,
        token
      })
      if (items) {
        entries.push(items)
        token = nextToken
      }
    }
  }

  const [officialResult, originalLeaderboards] = await Promise.all([
    officialResultPromise,
    originalLeaderboardsPromise
  ])

  let newLeaderboards = []
  let leaderboardPromises = []

  await entries.forEach(async entry => {
    const points = await getPoints({ entry, officialResult })
    newLeaderboards.push({ username: entry.username, points })
  })

  newLeaderboards.forEach(({ username, points }) => {
    const original = originalLeaderboards.find(o => o.username === username)
    if (!original) {
      leaderboardPromises.push(createLeader(username, points))
    } else if (original && original.points !== points) {
      leaderboardPromises.push(updateLeader(original.id, points))
    } else {
      // No update needed.
    }
  })

  const results = await Promise.all(leaderboardPromises)
  res.json({ officialResult, entries, originalLeaderboards, newLeaderboards, results })
}
