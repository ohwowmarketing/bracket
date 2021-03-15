// import { listScores } from 'src/graphql/queries'
// import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { SM } from '@mui/Layout'
import { H3, H4 } from '@mui/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  },
  amazonCard: {
    border: `1px solid ${theme.palette.grey[700]}`,
    borderRadius: '4px',
    padding: '2px 2px',
    textAlign: 'center',
    fontSize: 10,
    color: theme.palette.grey[700]
  }
}))

const Results = () => {
  const winners = [
    {
      username: 'Terminatorwil',
      points: '300',
      prize: '$500',
      awc1: 'BAL',
      awc2: 'CLE',
      awc3: 'BUF',
      nwc1: 'TB',
      nwc2: 'LAR',
      nwc3: 'NO',
      ad1: 'KC',
      ad2: 'BUF',
      nd1: 'GB',
      nd2: 'TB',
      a: 'KC',
      n: 'TB',
      sb: 'TB',
      tiebreaker: '52'
    },
    {
      username: 'Jroode',
      points: '290',
      awc1: 'BAL',
      awc2: 'PIT',
      awc3: 'BUF',
      nwc1: 'TB',
      nwc2: 'LAR',
      nwc3: 'NO',
      ad1: 'KC',
      ad2: 'BUF',
      nd1: 'GB',
      nd2: 'TB',
      a: 'KC',
      n: 'TB',
      sb: 'TB',
      tiebreaker: '65',
      prize: '$250'
    },
    {
      username: 'Jonathanh4616',
      points: '210',
      awc1: 'TEN',
      awc2: 'CLE',
      awc3: 'BUF',
      nwc1: 'TB',
      nwc2: 'LAR',
      nwc3: 'NO',
      ad1: 'KC',
      ad2: 'BUF',
      nd1: 'GB',
      nd2: 'TB',
      a: 'KC',
      n: 'TB',
      sb: 'TB',
      tiebreaker: '74',
      prize: '$100'
    },
    {
      username: 'Eero',
      points: '210',
      awc1: 'TEN',
      awc2: 'CLE',
      awc3: 'BUF',
      nwc1: 'TB',
      nwc2: 'LAR',
      nwc3: 'NO',
      ad1: 'KC',
      ad2: 'BUF',
      nd1: 'GB',
      nd2: 'TB',
      a: 'KC',
      n: 'TB',
      sb: 'TB',
      tiebreaker: '75',
      prize: '$50'
    },
    {
      username: 'Djlas7',
      points: '210',
      awc1: 'TEN',
      awc2: 'PIT',
      awc3: 'BUF',
      nwc1: 'TB',
      nwc2: 'LAR',
      nwc3: 'NO',
      ad1: 'KC',
      ad2: 'BUF',
      nd1: 'GB',
      nd2: 'TB',
      a: 'KC',
      n: 'TB',
      sb: 'TB',
      tiebreaker: '51',
      prize: '$50'
    },
    {
      username: 'DarthTakacs12',
      points: '210',
      awc1: 'TEN',
      awc2: 'PIT',
      awc3: 'BUF',
      nwc1: 'TB',
      nwc2: 'LAR',
      nwc3: 'NO',
      ad1: 'KC',
      ad2: 'BUF',
      nd1: 'GB',
      nd2: 'TB',
      a: 'KC',
      n: 'TB',
      sb: 'TB',
      tiebreaker: '66',
      prize: '$50'
    }
  ]
  const classes = useStyles()
  return (
    <SM align='center'>
      <TableContainer component={Paper} className={classes.paper}>
        <H3>Results</H3>
        <H4>NFL Bracket Challenge</H4>
        <Table aria-label='Results'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Prize</TableCell>
              <TableCell>Username</TableCell>
              <TableCell align='right'>Points</TableCell>
              {/* <TableCell>AFC Wildcard 1</TableCell>
              <TableCell>AFC Wildcard 2</TableCell>
              <TableCell>AFC Wildcard 3</TableCell>
              <TableCell>NFC Wildcard 1</TableCell>
              <TableCell>NFC Wildcard 2</TableCell>
              <TableCell>NFC Wildcard 3</TableCell>
              <TableCell>AFC Divisional 1</TableCell>
              <TableCell>AFC Divisional 2</TableCell>
              <TableCell>NFC Divisional 1</TableCell>
              <TableCell>NFC Divisional 2</TableCell>
              <TableCell>AFC Conferenfce</TableCell>
              <TableCell>NFC Conference</TableCell>
              <TableCell>Super Bowl</TableCell> */}
              <TableCell align='right'>Tie Breaker</TableCell>
              {/* <TableCell align='right'>View Picks</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {winners.map((row, i) => (
              <TableRow key={row.username}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <>
                    {row.prize}
                    <Box className={classes.amazonCard}>
                      <Icon
                        className='fab fa-amazon'
                        color='inherit'
                        fontSize='small'
                      />
                    </Box>
                  </>
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell align='right'>{row.points}</TableCell>
                {/* <TableCell>{row.awc1}</TableCell>
                <TableCell>{row.awc2}</TableCell>
                <TableCell>{row.awc3}</TableCell>
                <TableCell>{row.nwc1}1</TableCell>
                <TableCell>{row.nwc2}</TableCell>
                <TableCell>{row.nwc3}</TableCell>
                <TableCell>{row.ad1}</TableCell>
                <TableCell>{row.ad2}</TableCell>
                <TableCell>{row.nd1}</TableCell>
                <TableCell>{row.nd2}</TableCell>
                <TableCell>{row.a}</TableCell>
                <TableCell>{row.n}</TableCell>
                <TableCell>{row.sb}</TableCell> */}
                <TableCell align='right'>{row.tiebreaker}</TableCell>
                {/* <TableCell align='right'>
                  <Link href={`/auth/leaderboard/${row.username}`}>
                    <Contained color='primary' size='small'>
                      View Picks
                    </Contained>
                  </Link>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SM>
  )
}

export default Results
