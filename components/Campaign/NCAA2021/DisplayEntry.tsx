import * as React from 'react'
import axios from 'axios'
import {
  // useSelector,
  useDispatch
} from 'react-redux'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import Box from '@material-ui/core/Box'
import { XL } from '@mui/Layout'
import { H3 } from '@mui/Typography'
import Brackets from './Brackets'
import { bracketByUsername } from 'src/graphql/queries'
import { picks } from '@components/Campaign/NCAA2021/Picks'
import { getScore } from '@components/Campaign/NCAA2021/Score'
import ScoreRow, { ScoreProps } from '@components/Campaign/NCAA2021/ScoreRow'

const NCAA2021 = ({ username }) => {
  const dispatch = useDispatch()

  const [user, setUser] = React.useState<any>(null)
  const [score, setScore] = React.useState<ScoreProps | null>(null)

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

  // React.useEffect(() => {
  //   const checkForEntry = async () => {
  //     try {
  //       const brackets: any = await API.graphql(
  //         graphqlOperation(bracketByUsername, {
  //           username: username
  //         })
  //       )
  //       if (brackets.data.bracketByUsername.items) {
  //         brackets.data.bracketByUsername.items.map((item) => {
  //           if (item.event === 'NCAATWENTYONE') {
  //             dispatch({
  //               type: 'IMPORT',
  //               bracketId: item.id,
  //               picks: JSON.parse(item.picks),
  //               tieBreaker: item.tieBreaker,
  //               version: item._version
  //             })
  //           }
  //         })
  //       }
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }

  //   if (user) {
  //     checkForEntry()
  //   }
  // }, [user])

  React.useEffect(() => {
    const getPicks = () => {
      const userPicks = picks.find((pick) => pick.username === username)
      const score = getScore(userPicks)
      setScore(score)
      dispatch({
        type: 'IMPORT',
        bracketId: username,
        picks: userPicks.selections,
        tieBreaker: userPicks.tiebreaker,
        version: 1
      })
    }

    if (username) {
      getPicks()
    }
  }, [username])

  return (
    <XL>
      <Box textAlign='center'>{score && <ScoreRow score={score} />}</Box>
      <Brackets />
    </XL>
  )
}

export default NCAA2021
