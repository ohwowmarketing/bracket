import * as React from 'react'
import axios from 'axios'
import {
  // useSelector,
  useDispatch
} from 'react-redux'
import { API, Auth, graphqlOperation } from 'aws-amplify'
// import Box from '@material-ui/core/Box'
import { XL } from '@mui/Layout'
// import { Contained } from '@mui/Button'
import Brackets from './Brackets'
import { bracketByUsername } from 'src/graphql/queries'

const NCAA2021 = () => {
  const dispatch = useDispatch()
  // const { locked } = useSelector((state) => state)

  const [user, setUser] = React.useState<any>(null)

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
    const checkForEntry = async () => {
      try {
        const brackets: any = await API.graphql(
          graphqlOperation(bracketByUsername, {
            username: `${user.username}`
          })
        )
        if (brackets.data.bracketByUsername.items) {
          brackets.data.bracketByUsername.items.map((item) => {
            if (item.event === 'NCAATWENTYONE') {
              dispatch({
                type: 'IMPORT',
                bracketId: item.id,
                picks: JSON.parse(item.picks),
                tieBreaker: item.tieBreaker,
                version: item._version
              })
            }
          })
        }
      } catch (e) {
        console.error(e)
      }
    }

    if (user) {
      checkForEntry()
    }
  }, [user])

  React.useEffect(() => {
    const addUserToMailchimp = async () => {
      try {
        const response = await axios.post(
          'https://sggplayoffs.com/api/mc/add',
          {
            email: user.attributes.email,
            state: user.attributes['custom:state']
          }
        )
        if (response && response.status === 200) {
          await Auth.updateUserAttributes(user, { 'custom:mc': '1' })
        }
      } catch (e) {
        console.error(e)
      }
    }
    if (
      user &&
      user.attributes['custom:state'] &&
      !user.attributes['custom:mc']
    ) {
      addUserToMailchimp()
    }
  }, [user])

  return (
    <XL>
      {/* <Box textAlign='center'>
        <Contained onClick={() => dispatch({ type: 'LOCK' })}>
          {locked ? 'Unlock' : 'Lock'}
        </Contained>
      </Box> */}
      <Brackets />
    </XL>
  )
}

export default NCAA2021
