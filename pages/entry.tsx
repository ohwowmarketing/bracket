import { withSSRContext, graphqlOperation } from 'aws-amplify'
import Bracket from '@components/Bracket'
import CircularProgress from '@material-ui/core/CircularProgress'
import { entryByUsername } from 'src/graphql/queries'
import { SM } from '@mui/Layout'

const Entry = ({ entry }) => {
  if (entry) {
    return <Bracket entry={entry} />
  } else {
    return (
      <SM align='center'>
        <CircularProgress />
      </SM>
    )
  }
}

export const getServerSideProps = async ({ req, res }) => {
  const { Auth, API } = withSSRContext({ req })
  const user = await Auth.currentAuthenticatedUser()
  if (!user) {
    res.writeHead(302, { Location: '/auth/signin' })
    res.end()
  }
  if (!user.attributes['custom:state'] || user.attributes['custom:state'].length !== 2) {
    res.writeHead(302, { Location: '/state' })
    res.end()
  }
  if (user.username.length > 1) {
    const { data } = await API.graphql(
      graphqlOperation(entryByUsername, { username: `${user.username}`, limit: 1 })
    )
    if (data) {
      const [rawEntry] = data.entryByUsername.items
      if (rawEntry) {
        const entry = {
          id: rawEntry.id,
          username: rawEntry.username,
          tieBreaker: rawEntry.tieBreaker,
          superBowl: rawEntry.superBowl,
          afcConference: rawEntry.afcConference,
          nfcConference: rawEntry.nfcConference,
          afcDivisional1: rawEntry.afcDivisional1,
          afcDivisional2: rawEntry.afcDivisional2,
          nfcDivisional1: rawEntry.nfcDivisional1,
          nfcDivisional2: rawEntry.nfcDivisional2,
          afcWildCard1: rawEntry.afcWildCard1,
          afcWildCard2: rawEntry.afcWildCard2,
          afcWildCard3: rawEntry.afcWildCard3,
          nfcWildCard1: rawEntry.nfcWildCard1,
          nfcWildCard2: rawEntry.nfcWildCard2,
          nfcWildCard3: rawEntry.nfcWildCard3
        }
        return {
          props: { entry }
        }
      }
    }
  }

  return {
    props: {
      entry: {
        tieBreaker: 0,
        superBowl: null,
        afcConference: null,
        nfcConference: null,
        afcDivisional1: null,
        afcDivisional2: null,
        nfcDivisional1: null,
        nfcDivisional2: null,
        afcWildCard1: null,
        afcWildCard2: null,
        afcWildCard3: null,
        nfcWildCard1: null,
        nfcWildCard2: null,
        nfcWildCard3: null
      }
    }
  }
}

export default Entry
