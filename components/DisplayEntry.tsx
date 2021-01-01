import { makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { SM } from '@mui/Layout'
import { P } from '@mui/Typography'
import { teamById } from '@lib/teams'

const useStyles = makeStyles((theme: Theme) => ({
  imgContainer: {
    width: '24px',
    height: '24px',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  },
  img: {
    width: '24px',
    height: '24px',
    objectFit: 'fill'
  },
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  }
}))

const DisplayEntry = ({ entry }) => {
  const classes = useStyles()

  const displayTeam = (id: string | null) => {
    const team = teamById(id)
    return (
      <>
        {team ? (
          <>
            <div className={classes.imgContainer}>
              <img alt={team.name} src={team.logo} className={classes.img} />
            </div>
            {team.name}
          </>
        ) : (
          <>'TBD'</>
        )}
      </>
    )
  }

  return (
    <SM>
      <TableContainer component={Paper} className={classes.paper}>
        <Table aria-label='Leaderboard'>
          <TableHead>
            <TableRow>
              <TableCell>Game</TableCell>
              <TableCell align='right'>Pick</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key='afcWildCard1'>
              <TableCell>AFC Wild Card Game 1</TableCell>
              <TableCell align='right'>{displayTeam(entry.afcWildCard1)}</TableCell>
            </TableRow>
            <TableRow key='afcWildCard2'>
              <TableCell>AFC Wild Card Game 2</TableCell>
              <TableCell align='right'>{displayTeam(entry.afcWildCard2)}</TableCell>
            </TableRow>
            <TableRow key='afcWildCard3'>
              <TableCell>AFC Wild Card Game 3</TableCell>
              <TableCell align='right'>{displayTeam(entry.afcWildCard3)}</TableCell>
            </TableRow>
            <TableRow key='nfcWildCard1'>
              <TableCell>NFC Wild Card Game 1</TableCell>
              <TableCell align='right'>{displayTeam(entry.nfcWildCard1)}</TableCell>
            </TableRow>
            <TableRow key='nfcWildCard2'>
              <TableCell>NFC Wild Card Game 2</TableCell>
              <TableCell align='right'>{displayTeam(entry.nfcWildCard2)}</TableCell>
            </TableRow>
            <TableRow key='nfcWildCard3'>
              <TableCell>NFC Wild Card Game 3</TableCell>
              <TableCell align='right'>{displayTeam(entry.nfcWildCard3)}</TableCell>
            </TableRow>
            <TableRow key='afcDivisional1'>
              <TableCell>AFC Divisional Game 1</TableCell>
              <TableCell align='right'>{displayTeam(entry.afcDivisional1)}</TableCell>
            </TableRow>
            <TableRow key='afcDivisional2'>
              <TableCell>AFC Divisional Game 2</TableCell>
              <TableCell align='right'>{displayTeam(entry.afcDivisional2)}</TableCell>
            </TableRow>
            <TableRow key='nfcDivisional1'>
              <TableCell>NFC Divisional Game 1</TableCell>
              <TableCell align='right'>{displayTeam(entry.nfcDivisional1)}</TableCell>
            </TableRow>
            <TableRow key='nfcDivisional2'>
              <TableCell>NFC Divisional Game 2</TableCell>
              <TableCell align='right'>{displayTeam(entry.nfcDivisional2)}</TableCell>
            </TableRow>
            <TableRow key='afcConference'>
              <TableCell>AFC Conference</TableCell>
              <TableCell align='right'>{displayTeam(entry.afcConference)}</TableCell>
            </TableRow>
            <TableRow key='nfcConference'>
              <TableCell>NFC Conference</TableCell>
              <TableCell align='right'>{displayTeam(entry.nfcConference)}</TableCell>
            </TableRow>
            <TableRow key='superBowl'>
              <TableCell>Super Bowl</TableCell>
              <TableCell align='right'>
                {displayTeam(entry.superBowl)}
                {` (Tie Breaker: ${entry.tieBreaker})`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </SM>
  )
}

export default DisplayEntry
