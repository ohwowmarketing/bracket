import Layout from '@components/Layout/AuthRequired'
import Link from '@components/Link'
import Paper from '@material-ui/core/Paper'
// import { listScores } from 'src/graphql/queries'
// import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Contained } from '@mui/Button'
import { SM } from '@mui/Layout'
import { H3, H4, P } from '@mui/Typography'
import { withSSRContext } from 'aws-amplify'
import {
  // leaderByUsername,
  entryByUsername
} from 'src/graphql/queries'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  }
}))

const Leaderboard = ({ leaderboards, user }) => {
  const classes = useStyles()
  return (
    <Layout>
      <SM align='center'>
        <H3>Leaderboard</H3>
        <H4>NFL Bracket Challenge</H4>
        <P>Scores are updated at the end of each round.</P>
        <TableContainer component={Paper} className={classes.paper}>
          <Table aria-label='Leaderboard'>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell align='right'>Points</TableCell>
                <TableCell align='right'>View Picks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboards.map(row => (
                <TableRow key={row.username}>
                  <TableCell>{row.username}</TableCell>
                  <TableCell align='right'>{row.points}</TableCell>
                  <TableCell align='right'>
                    <Link href={`/auth/leaderboard/${row.username}`}>
                      <Contained color='primary' size='small'>
                        View Picks
                      </Contained>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow key='blank'>
                <TableCell>{'...'}</TableCell>
                <TableCell align='right'> </TableCell>
                <TableCell align='right'> </TableCell>
              </TableRow>
              <TableRow key={`user-${user.username}`}>
                <TableCell>{user.username}</TableCell>
                <TableCell align='right'>{user.points}</TableCell>
                <TableCell align='right'>
                  <Link href={`/auth/leaderboard/${user.username}`}>
                    <Contained color='primary' size='small'>
                      View Picks
                    </Contained>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </SM>
    </Layout>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const { Auth, API } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser()
    // const { data } = await API.graphql({
    //   query: listLeaderboards,
    //   variables: {
    //     limit: 20
    //   }
    // })
    // const leaderboards = data.listLeaderboards.items
    // await leaderboards.sort((a, b) => b.points - a.points)
    // const prizes = 6
    // const leaders = leaderboards.slice(0, prizes).map(i => i)

    const leaders = [
      { username: 'EGBroadbent', points: '180' },
      { username: 'Slick', points: '180' },
      { username: 'Terminatorwil', points: '180' },
      { username: 'Aaronleepena22', points: '170' },
      { username: 'asferratore8', points: '170' },
      { username: 'billls.culture', points: '170' },
      { username: 'bradygoat', points: '170' },
      { username: 'Chrisraffone7', points: '170' },
      { username: 'Dev44', points: '170' },
      { username: 'dimitri', points: '170' },
      { username: 'Eero', points: '170' },
      { username: 'Godman69', points: '170' },
      { username: 'Jdietz3', points: '170' },
      { username: 'Jonasdelo', points: '170' },
      { username: 'Jonathanh4616', points: '170' },
      { username: 'Jroode12', points: '170' },
      { username: 'LeBrows-', points: '170' },
      { username: 'Ryan_wrld15', points: '170' },
      { username: 'Shaner888', points: '170' },
      { username: 'Sideswipe', points: '170' },
      { username: 'theofox13', points: '170' },
      { username: 'TimboG@89', points: '170' },
      { username: 'Tyler0312', points: '170' }
    ]

    const userPoints = await API.graphql({
      query: entryByUsername,
      variables: {
        username: user.username
      }
    })
    const [userData] = userPoints.data.entryByUsername.items
    let points = 0
    if (userData.afcWildCard1 === 'BAL') {
      points += 10
    }
    if (userData.afcWildCard2 === 'CLE') {
      points += 10
    }
    if (userData.afcWildCard3 === 'BUF') {
      points += 10
    }
    if (userData.nfcWildCard1 === 'TB') {
      points += 10
    }
    if (userData.nfcWildCard2 === 'LAR') {
      points += 10
    }
    if (userData.nfcWildCard3 === 'NO') {
      points += 10
    }
    if (userData.nfcDivisional1 === 'GB') {
      points += 20
    }
    if (userData.afcDivisional2 === 'BUF') {
      points += 20
    }
    if (userData.afcDivisional1 === 'KC') {
      points += 20
    }
    if (userData.nfcDivisional2 === 'TB') {
      points += 20
    }
    if (userData.nfcConference === 'TB') {
      points += 40
    }
    return {
      props: { leaderboards: leaders, user: { username: user.username, points } }
    }
  } catch (err) {
    console.error(err)
    res.writeHead(302, { Location: '/' })
    res.end()
  }
  return { props: {} }
}

export default Leaderboard
