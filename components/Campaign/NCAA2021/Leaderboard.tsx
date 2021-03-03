import Link from '@components/Link'
import Box from '@material-ui/core/Box'
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
import { LG } from '@mui/Layout'
import { H3, H4, P } from '@mui/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  }
}))

const Leaderboard = () => {
  const classes = useStyles()
  const leaders = [
    {
      username: 'Terminatorwil',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'bradygoat',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'Chrisraffone7',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'dimitri',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'Eero',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'Jdietz3',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'Jonasdelo',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'Jonathanh4616',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'Jroode12',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'LeBrows-',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'Ryan_wrld15',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    },
    {
      username: 'TimboG@89',
      r64: '270',
      r32: '300',
      s16: '320',
      e8: '320',
      f4: '320',
      champ: '320',
      total: '1,530'
    }
  ]
  return (
    <LG>
      <Box textAlign='center'>
        <H3>Leaderboard</H3>
        <H4>NCAA Bracket Challenge</H4>
        <P>Scores are updated at the end of each round.</P>
      </Box>

      <TableContainer component={Paper} className={classes.paper}>
        <Table aria-label='Leaderboard'>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Username</TableCell>
              <TableCell align='right'>R64</TableCell>
              <TableCell align='right'>R32</TableCell>
              <TableCell align='right'>S16</TableCell>
              <TableCell align='right'>E8</TableCell>
              <TableCell align='right'>F4</TableCell>
              <TableCell align='right'>NCG</TableCell>
              <TableCell align='right'>Total</TableCell>
              <TableCell align='right'>View Picks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaders.map((row, index) => (
              <TableRow key={row.username}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell align='right'>{row.r64}</TableCell>
                <TableCell align='right'>{row.r32}</TableCell>
                <TableCell align='right'>{row.s16}</TableCell>
                <TableCell align='right'>{row.e8}</TableCell>
                <TableCell align='right'>{row.f4}</TableCell>
                <TableCell align='right'>{row.champ}</TableCell>
                <TableCell align='right'>{row.total}</TableCell>
                <TableCell align='right'>
                  <Link href='#'>
                    <Contained color='primary' size='small'>
                      View Picks
                    </Contained>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LG>
  )
}

export default Leaderboard
