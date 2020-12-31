import { withSSRContext } from 'aws-amplify'
import { listLeaderboards } from 'src/graphql/queries'
// import { listScores } from 'src/graphql/queries'
// import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { SM } from '@mui/Layout'
import { H3, H4, P } from '@mui/Typography'
import Link from '@components/Link'

const useStyles = makeStyles({
  // table: {
  //   minWidth: 650
  // }
})

const Leaderboard = ({ leaderboards }) => {
  const classes = useStyles()
  return (
    <SM align='center'>
      <H3>Leaderboard</H3>
      <H4>NFL Bracket Challenge</H4>
      <P>Scores are updated at the end of each round.</P>
      <TableContainer component={Paper}>
        <Table aria-label='Leaderboard'>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboards.map(row => (
              <TableRow key={row.username}>
                <TableCell component='th' scope='row'>
                  {row.username}
                  {/* <Link href={`/leaderboard/${row.username}`}>{row.username}</Link> */}
                </TableCell>
                <TableCell>{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SM>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const { Auth, API } = withSSRContext({ req })
  try {
    await Auth.currentAuthenticatedUser()
    const { data } = await API.graphql({
      query: listLeaderboards
    })
    const leaderboards = data.listLeaderboards.items
    await leaderboards.sort((a, b) => b.points - a.points)
    return {
      props: { leaderboards }
    }
  } catch (err) {
    res.writeHead(302, { Location: '/auth/signin' })
    res.end()
  }
  return { props: {} }
}

export default Leaderboard
