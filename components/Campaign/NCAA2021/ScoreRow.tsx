import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { LG } from '@mui/Layout'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  }
}))

export interface ScoreProps {
  username: string
  r64?: string
  r32?: string
  s16?: string
  e8?: string
  f4?: string
  champ?: string
  tiebreaker?: string
  total?: string
}

const ScoreRow = ({ score }: { score?: ScoreProps }) => {
  const classes = useStyles()

  return (
    <LG>
      <TableContainer component={Paper} className={classes.paper}>
        <Table aria-label='Leaderboard'>
          <TableHead>
            <TableRow>
              {/* <TableCell>Rank</TableCell> */}
              <TableCell>Username</TableCell>
              <TableCell align='right'>R64</TableCell>
              <TableCell align='right'>R32</TableCell>
              <TableCell align='right'>S16</TableCell>
              <TableCell align='right'>E8</TableCell>
              <TableCell align='right'>F4</TableCell>
              {/*<TableCell align='right'>NCG</TableCell> */}
              <TableCell align='right'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {score && (
              <>
                <TableRow key='user-score'>
                  {/* <TableCell></TableCell> */}
                  <TableCell>{score.username}</TableCell>
                  <TableCell align='right'>{score.r64}</TableCell>
                  <TableCell align='right'>{score.r32}</TableCell>
                  <TableCell align='right'>{score.s16}</TableCell>
                  <TableCell align='right'>{score.e8}</TableCell>
                  <TableCell align='right'>{score.f4}</TableCell>
                  {/* <TableCell align='right'>{score.champ}</TableCell> */}
                  <TableCell align='right'>{score.total}</TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </LG>
  )
}

export default ScoreRow
