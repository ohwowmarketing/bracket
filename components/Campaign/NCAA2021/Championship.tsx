import * as React from 'react'
import { API, Auth } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import { Contained } from '@mui/Button'
import Link from '@components/Link'
import { createBracket, updateBracket } from 'src/graphql/mutations'

const useStyles = makeStyles((theme: Theme) => ({
  totalScore: {
    fontSize: '0.85em',
    marginBottom: '10px'
  },
  white: {
    color: '#fff'
  }
}))

const Championship = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { bracketId, picks, tieBreaker, version, locked } = useSelector(
    (state) => state
  )
  const [disabled, setDisabled] = React.useState<boolean>(true)
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [alert, setAlert] = React.useState<boolean>(false)

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
    if (picks.championship) {
      setDisabled(false)
    }
  }, [picks])

  const handleTieBreaker = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'TIEBREAKER',
      tieBreaker: parseInt(evt.target.value)
    })
  }

  const handleSubmit = async (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    setLoading(true)
    if (tieBreaker !== 0) {
      if (bracketId) {
        const result: any = await API.graphql({
          query: updateBracket,
          variables: {
            input: {
              id: bracketId,
              event: 'NCAATWENTYONE',
              username: user.username,
              picks: JSON.stringify(picks),
              tieBreaker,
              _version: version
            }
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
        if (result.data.updateBracket._version) {
          dispatch({
            type: 'UPDATE',
            version: result.data.updateBracket._version
          })
        }
      } else {
        const result: any = await API.graphql({
          query: createBracket,
          variables: {
            input: {
              event: 'NCAATWENTYONE',
              username: user.username,
              picks: JSON.stringify(picks),
              tieBreaker
            }
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
        if (result.data.createBracket.id) {
          dispatch({ type: 'SAVE', bracketId: result.data.createBracket.id })
        }
      }
      setLoading(false)
      setAlert(true)
    }
  }

  return (
    <>
      <Box p={2}>
        <FormLabel component='legend' className={classes.totalScore}>
          {`Total Combined Score:`}
        </FormLabel>

        <TextField
          disabled={disabled}
          error={!disabled && tieBreaker === 0}
          type='number'
          name='tieBreaker'
          label='Tie Breaker'
          variant='outlined'
          value={tieBreaker}
          onChange={handleTieBreaker}
          fullWidth
        />
      </Box>
      {!locked && (
        <>
          {alert && (
            <Box my={2} textAlign='center'>
              <Alert
                severity='success'
                onClose={() => {
                  setAlert(false)
                }}>
                {version > 1 ? 'Updated' : 'Saved'}
              </Alert>
            </Box>
          )}
          <Box my={2} textAlign='center'>
            <Contained
              disabled={tieBreaker === 0 || loading}
              component={Link}
              href='/ncaa/entry'
              color='primary'
              align='center'
              onClick={handleSubmit}>
              <span className={classes.white}>
                {loading ? (
                  <CircularProgress color='inherit' size={16} />
                ) : (
                  <>{bracketId ? 'Update Entry' : 'Submit Entry'}</>
                )}
              </span>
            </Contained>
          </Box>
        </>
      )}
    </>
  )
}

export default Championship
