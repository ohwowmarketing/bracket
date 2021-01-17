import { withSSRContext } from 'aws-amplify'
import {
  listLeaderboards,
  // leaderByUsername,
  entryByUsername
} from 'src/graphql/queries'
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
import { Contained } from '@mui/Button'
import Link from '@components/Link'
import Layout from '@components/Layout/AuthRequired'

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
      { username: 'anthonysaub', points: '80' },
      { username: 'Beingeaglesfanhurts', points: '80' },
      { username: 'Bigsimonnn', points: '80' },
      { username: 'blakeharshman', points: '80' },
      { username: 'Camscott', points: '80' },
      { username: 'Captainkeags', points: '80' },
      { username: 'Ccurnow23', points: '80' },
      { username: 'Coheathomas', points: '80' },
      { username: 'Colekannam', points: '80' },
      { username: 'Dandan4927', points: '80' },
      { username: 'EGBroadbent', points: '80' },
      { username: 'Epatrick2017', points: '80' },
      { username: 'ethanrutherford', points: '80' },
      { username: 'EthanVon', points: '80' },
      { username: 'Jaredp', points: '80' },
      { username: 'kbowers07', points: '80' },
      { username: 'KyleTooFye', points: '80' },
      { username: 'Lukesluyter', points: '80' },
      { username: 'manny10', points: '80' },
      { username: 'MilkyWRLD', points: '80' },
      { username: 'Randyy77', points: '80' },
      { username: 'Ruben.da30', points: '80' },
      { username: 'sbarsh', points: '80' },
      { username: 'Slick', points: '80' },
      { username: 'SpookyShoes48', points: '80' },
      { username: 'Terminatorwil', points: '80' },
      { username: 'WarEaglezzz', points: '80' },
      { username: 'wboelter', points: '80' }
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
