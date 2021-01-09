import * as React from 'react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import DisplayEntry from 'components/DisplayEntry'
import { entryByUsername } from 'src/graphql/queries'
import Loading from 'components/Loading'

const initialFields = {
  tieBreaker: 0,
  superBowl: '',
  afcConference: '',
  nfcConference: '',
  afcDivisional1: '',
  afcDivisional2: '',
  nfcDivisional1: '',
  nfcDivisional2: '',
  afcWildCard1: '',
  afcWildCard2: '',
  afcWildCard3: '',
  nfcWildCard1: '',
  nfcWildCard2: '',
  nfcWildCard3: ''
}

const EntryTable = () => {
  const [entry, setEntry] = React.useState<any>(initialFields)
  const [user, setUser] = React.useState<any>(null)

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser()
        setUser(userData)
      } catch (e) {
        console.error(e)
      }
    }
    fetchUser()
  }, [])

  React.useEffect(() => {
    const checkForEntry = async () => {
      try {
        const { data }: any = await API.graphql(
          graphqlOperation(entryByUsername, { username: `${user.username}`, limit: 1 })
        )
        if (data) {
          const [rawEntry] = data.entryByUsername.items
          const { _deleted, _lastChangedAt, createdAt, updatedAt, ...cleanEntry } = rawEntry
          if (cleanEntry) {
            setEntry(cleanEntry)
          }
        }
      } catch (e) {
        console.error(e)
        setEntry(initialFields)
      }
    }

    if (user) {
      checkForEntry()
    }
  }, [user])
  return entry ? <DisplayEntry entry={entry} /> : <Loading />
}

export default EntryTable
