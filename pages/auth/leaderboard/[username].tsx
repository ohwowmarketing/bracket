import { withSSRContext, graphqlOperation } from 'aws-amplify'
import { entryByUsername } from 'src/graphql/queries'
import { teamById } from '@lib/teams'
import { MD } from '@mui/Layout'
import { H3, P } from '@mui/Typography'
import Link from '@components/Link'
import Layout from '@components/Layout/AuthRequired'
import DisplayEntry from '@components/DisplayEntry'

const Entry = ({ entry }) => {
  return (
    <Layout>
      <MD align='center'>
        <H3 gutterBottom>{entry.username}</H3>
        <DisplayEntry entry={entry} />

        <P>
          <Link href='/auth/leaderboard'>&larr; Return to leaderboard</Link>
        </P>
      </MD>
    </Layout>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  const { username } = query
  const { Auth, API } = withSSRContext({ req })
  try {
    await Auth.currentAuthenticatedUser()
    const entryQuery = await API.graphql(graphqlOperation(entryByUsername, { username }))
    const [entry] = entryQuery.data.entryByUsername.items
    return {
      props: { entry }
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}

export default Entry
