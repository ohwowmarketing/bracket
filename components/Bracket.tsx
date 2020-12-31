import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { API, Auth } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Hidden from '@material-ui/core/Hidden'
import useForm from '@hooks/useForm'
import { Contained } from '@mui/Button'
import { XS, Box } from '@mui/Layout'
import { H3 } from '@mui/Typography'
import Game from '@components/Game'
import { MiniHero } from '@components/Hero'
import { seeds } from '@lib/teams'
import { createEntry, updateEntry } from 'src/graphql/mutations'
import { listEntrys } from 'src/graphql/queries'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  matches: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  textFieldContainer: {
    padding: theme.spacing(2, 1)
  }
}))

const Bracket = ({ entry }) => {
  const classes = useStyles()
  const [waiting, setWaiting] = React.useState<boolean>(false)
  const [saved, setSaved] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<any>(null)

  React.useEffect(() => {
    const getUser = async () => {
      const tmpUser = await Auth.currentAuthenticatedUser()
      setUser(tmpUser)
    }
    getUser()
  }, [])

  const initialFormFields = entry
  const { values, handleChange, handleSubmit, handleUpdateFields } = useForm(async () => {
    setWaiting(true)
    const entryData = {
      ...values,
      username: user.username,
      tieBreaker: parseInt(values.tieBreaker)
    }
    // console.log(entryData)
    if (values.id) {
      const updateData = {
        ...entryData
      }
      await API.graphql({
        query: updateEntry,
        variables: { input: updateData },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      })
      setWaiting(false)
      setSaved(true)
    } else {
      try {
        const { data }: any = await API.graphql({
          query: createEntry,
          variables: { input: entryData },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
        const newValues = {
          ...entryData,
          id: data.createEntry.id
        }
        handleUpdateFields(newValues)
        setWaiting(false)
        setSaved(true)
      } catch (e) {
        console.log(e)
      }
    }
  }, initialFormFields)

  const handleCloseSnackbar = () => {
    setSaved(false)
  }

  return (
    <>
      <MiniHero />
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.root} spacing={1}>
          <Grid item container xs={12} sm={6} wrap='nowrap' alignItems='center'>
            <Grid item container xs={12} sm={4}>
              <Grid item container direction='column' xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='afcWildCard1'
                    label='AFC Wild Card (10 points)'
                    home={seeds.afc4}
                    away={seeds.afc5}
                    onChange={handleChange}
                    value={values.afcWildCard1}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='afcWildCard2'
                    label='AFC Wild Card (10 points)'
                    home={seeds.afc3}
                    away={seeds.afc6}
                    onChange={handleChange}
                    value={values.afcWildCard2}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='afcWildCard3'
                    label='AFC Wild Card (10 points)'
                    home={seeds.afc2}
                    away={seeds.afc7}
                    onChange={handleChange}
                    value={values.afcWildCard3}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={4}>
              <Grid item container direction='column' xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='afcDivisional1'
                    label='AFC Divisional (20 points)'
                    home={seeds.afc1}
                    away={values.afcWildCard1}
                    onChange={handleChange}
                    value={values.afcDivisional1}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='afcDivisional2'
                    label='AFC Divisional (20 points)'
                    home={values.afcWildCard3}
                    away={values.afcWildCard2}
                    onChange={handleChange}
                    value={values.afcDivisional2}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={4}>
              <Grid item container direction='column' xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='afcConference'
                    label='AFC Conference (40 points)'
                    home={values.afcDivisional1}
                    away={values.afcDivisional2}
                    onChange={handleChange}
                    value={values.afcConference}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            wrap='nowrap'
            alignItems='center'
            direction='row-reverse'>
            <Grid item container xs={12} sm={4}>
              <Grid item container direction='column' xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='nfcWildCard1'
                    label='NFC Wild Card (10 points)'
                    home={seeds.nfc4}
                    away={seeds.nfc5}
                    onChange={handleChange}
                    value={values.nfcWildCard1}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='nfcWildCard2'
                    label='NFC Wild Card (10 points)'
                    home={seeds.nfc3}
                    away={seeds.nfc6}
                    onChange={handleChange}
                    value={values.nfcWildCard2}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='nfcWildCard3'
                    label='NFC Wild Card (10 points)'
                    home={seeds.nfc2}
                    away={seeds.nfc7}
                    onChange={handleChange}
                    value={values.nfcWildCard3}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={4}>
              <Grid item container direction='column' xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='nfcDivisional1'
                    label='NFC Divisional (20 points)'
                    home={seeds.nfc1}
                    away={values.nfcWildCard1}
                    onChange={handleChange}
                    value={values.nfcDivisional1}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='nfcDivisional2'
                    label='NFC Divisional (20 points)'
                    home={values.nfcWildCard3}
                    away={values.nfcWildCard2}
                    onChange={handleChange}
                    value={values.nfcDivisional2}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={4} justify='center'>
              <Grid item container direction='column' xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Game
                    name='nfcConference'
                    label='NFC Conference (40 points)'
                    home={values.nfcDivisional1}
                    away={values.nfcDivisional2}
                    onChange={handleChange}
                    value={values.nfcConference}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Grid item xs={12} sm={4}>
              <Hidden smUp implementation='css'>
                <H3>Super Bowl</H3>
              </Hidden>
              <Game
                name='superBowl'
                label='Super Bowl (80 points)'
                home={values.afcConference}
                away={values.nfcConference}
                onChange={handleChange}
                value={values.superBowl}>
                {values.superBowl !== null && (
                  <div className={classes.textFieldContainer}>
                    <TextField
                      type='number'
                      name='tieBreaker'
                      label='Total Combined Score (Tie Breaker)'
                      variant='outlined'
                      value={values.tieBreaker}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                )}
              </Game>
            </Grid>
          </Grid>
        </Grid>

        <XS align='center'>
          <>
            {
              <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={saved}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity='success'>
                  Entry has been saved!
                </Alert>
              </Snackbar>
            }
            <Box mt={2}>
              <Contained type='submit' color='primary'>
                <>
                  {waiting ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : (
                    <>{values.id ? 'Update Entry' : 'Submit Entry'}</>
                  )}
                </>
              </Contained>
            </Box>
          </>
        </XS>
      </form>
    </>
  )
}

export default Bracket
