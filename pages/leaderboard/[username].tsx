import { useState, useEffect } from 'react'
import { withSSRContext, graphqlOperation } from 'aws-amplify'
import { entryByUsername } from 'src/graphql/queries'
import { teamById } from '@lib/teams'
import { MD } from '@mui/Layout'
import { H3, P } from '@mui/Typography'
import Loading from '@components/Loading'
import Link from '@components/Link'

const Entry = ({ entry }) => {
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    if (entry) {
      setLoading(false)
    }
  }, [entry])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <MD align='center'>
          <H3 gutterBottom>{entry.username}</H3>
          <P>
            AFC Wild Card Game 1: {entry.afcWildCard1}
            <br />
            AFC Wild Card Game 2: {entry.afcWildCard2}
            <br />
            AFC Wild Card Game 3: {entry.afcWildCard3}
            <br />
            NFC Wild Card Game 1: {entry.nfcWildCard1}
            <br />
            NFC Wild Card Game 2: {entry.nfcWildCard2}
            <br />
            NFC Wild Card Game 3: {entry.nfcWildCard3}
            <br />
            AFC Divisional Game 1: {entry.afcDivisional1}
            <br />
            AFC Divisional Game 2: {entry.afcDivisional2}
            <br />
            NFC Divisional Game 1: {entry.nfcDivisional1}
            <br />
            NFC Divisional Game 2: {entry.nfcDivisional2}
            <br />
            AFC Conference: {entry.afcConference}
            <br />
            NFC Conference: {entry.nfcConference}
            <br />
            Super Bowl: {entry.superBowl}
            <br />
            Tie Breaker: {`${entry.tieBreaker}`}
            <br />
          </P>
          <P>
            <Link href='/leaderboard'>Return to leaderboard</Link>
          </P>
        </MD>
      )}
    </>
  )
}

export const getServerSideProps = async ({ req }) => {
  const username = req.url.substring(req.url.lastIndexOf('/') + 1)
  const { Auth, API } = withSSRContext({ req })
  try {
    await Auth.currentAuthenticatedUser()
    const entryQuery = await API.graphql(graphqlOperation(entryByUsername, { username }))
    const [entry] = entryQuery.data.entryByUsername.items
    return {
      props: { entry }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {}
  }
}

export default Entry
