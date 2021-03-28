import * as React from 'react'
import { Auth } from 'aws-amplify'
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
import { LG } from '@mui/Layout'
import { H3, H4, P } from '@mui/Typography'
import Link from '@components/Link'
import { picks } from '@components/Campaign/NCAA2021/Picks'
import { getScore } from '@components/Campaign/NCAA2021/Score'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  }
}))

export interface LeaderProps {
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

const Leaderboard = ({ leaders }: { leaders: LeaderProps[] }) => {
  const classes = useStyles()
  const [user, setUser] = React.useState<any>(null)
  const [userScore, setUserScore] = React.useState<any>(null)

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
    const getPicks = () => {
      const userPicks = picks.find((pick) => pick.username === user.username)
      if (userPicks) {
        const tempScore = getScore(userPicks)
        setUserScore(tempScore)
      }
    }

    if (user) {
      getPicks()
    }
  }, [user])

  return (
    <LG>
      <TableContainer component={Paper} className={classes.paper}>
        <Box textAlign='center'>
          <H3>Leaderboard</H3>
          <H4>NCAA Bracket Challenge</H4>
          <P>Scores are updated at the end of each day.</P>
        </Box>
        <Table aria-label='Leaderboard'>
          <TableHead>
            <TableRow>
              {/* <TableCell>Rank</TableCell> */}
              <TableCell>Username</TableCell>
              <TableCell align='right'>R64</TableCell>
              <TableCell align='right'>R32</TableCell>
              <TableCell align='right'>S16</TableCell>
              {/*<TableCell align='right'>E8</TableCell>
              <TableCell align='right'>F4</TableCell>
              <TableCell align='right'>NCG</TableCell> */}
              <TableCell align='right'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaders.map((row) => (
              <TableRow key={row.username}>
                {/* <TableCell>{index + 1}</TableCell> */}
                <TableCell>
                  {/* {row.username} */}
                  {`${row.username} (`}

                  <Link href={`/ncaa/leaderboard/${row.username}`}>
                    View Picks
                  </Link>
                  {')'}
                </TableCell>
                <TableCell align='right'>{row.r64}</TableCell>
                <TableCell align='right'>{row.r32}</TableCell>
                <TableCell align='right'>{row.s16}</TableCell>
                {/* <TableCell align='right'>{row.e8}</TableCell>
                <TableCell align='right'>{row.f4}</TableCell>
                <TableCell align='right'>{row.champ}</TableCell> */}
                <TableCell align='right'>{row.total}</TableCell>
              </TableRow>
            ))}
            <TableRow key='spacer1'>
              {/* <TableCell></TableCell> */}
              <TableCell>...</TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
              {/* <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell> */}
              <TableCell align='right'></TableCell>
            </TableRow>
            {userScore && (
              <>
                <TableRow key='user-score'>
                  {/* <TableCell></TableCell> */}
                  <TableCell>{userScore.username}</TableCell>
                  <TableCell align='right'>{userScore.r64}</TableCell>
                  <TableCell align='right'>{userScore.r32}</TableCell>
                  <TableCell align='right'>{userScore.s16}</TableCell>
                  {/* <TableCell align='right'>{userScore.e8}</TableCell>
                    <TableCell align='right'>{userScore.f4}</TableCell>
                    <TableCell align='right'>{userScore.champ}</TableCell> */}
                  <TableCell align='right'>{userScore.total}</TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </LG>
  )
}

export default Leaderboard
