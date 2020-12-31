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
import { H4 } from '@mui/Typography'
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

  interface GameDisplayParams {
    conf?: string
    name: string
    label: string
    home: number | string
    away: number | string
  }

  const GameDisplay = ({ conf = '', name, label, home, away }: GameDisplayParams) => {
    const lower: string = conf ? conf.toLowerCase() : ''
    const upper: string = conf ? conf.toUpperCase() : ''
    const homeTeam = typeof home === 'number' ? seeds[`${lower}${home}`] : values[`${lower}${home}`]
    const awayTeam = typeof away === 'number' ? seeds[`${lower}${away}`] : values[`${lower}${away}`]
    return (
      <Game
        name={`${lower}${name}`}
        label={`${upper} ${label}`}
        home={homeTeam}
        away={awayTeam}
        value={values[`${lower}${name}`]}
        onChange={handleChange}
      />
    )
  }

  const SuperBowl = () => {
    return (
      <Grid container direction='row' justify='center'>
        <Grid item xs={12} md={4}>
          <Hidden mdUp implementation='css'>
            <H4 align='center'>Super Bowl</H4>
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
    )
  }

  const WildCardRound = ({ conf }) => {
    return (
      <Grid item container xs={12} md={4}>
        <Grid container direction='column'>
          <Grid item xs>
            <GameDisplay
              conf={conf}
              name='WildCard1'
              label='Wild Card (10 points)'
              home={4}
              away={5}
            />
          </Grid>
          <Grid item xs>
            <GameDisplay
              conf={conf}
              name='WildCard2'
              label='Wild Card (10 points)'
              home={3}
              away={6}
            />
          </Grid>
          <Grid item xs>
            <GameDisplay
              conf={conf}
              name='WildCard3'
              label='Wild Card (10 points)'
              home={2}
              away={7}
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const DivisionalRound = ({ conf }: { conf: string }) => {
    return (
      <Grid item container xs={12} md={4}>
        <Grid container direction='column'>
          <Grid item xs>
            <GameDisplay
              conf={conf}
              name='Divisional1'
              label='Divisional (20 points)'
              home={1}
              away='WildCard1'
            />
          </Grid>
          <Grid item xs>
            <GameDisplay
              conf={conf}
              name='Divisional2'
              label='Divisional (20 points)'
              home='WildCard3'
              away='WildCard2'
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const ConferenceRound = ({ conf }: { conf: string }) => {
    return (
      <Grid item container xs={12} md={4}>
        <Grid container direction='column'>
          <Grid item xs>
            <GameDisplay
              conf={conf}
              name='Conference'
              label='Conference (40 points)'
              home='Divisional1'
              away='Divisional2'
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const ConferenceBrackets = ({ conf }: { conf: string }) => {
    return (
      <Grid container alignItems='center' direction={conf === 'nfc' ? 'row-reverse' : 'row'}>
        <Grid item xs>
          <Hidden mdUp implementation='css'>
            <H4 align='center'>{conf.toUpperCase()}</H4>
          </Hidden>
        </Grid>
        <WildCardRound conf={conf} />
        <DivisionalRound conf={conf} />
        <ConferenceRound conf={conf} />
      </Grid>
    )
  }

  return (
    <>
      <MiniHero />
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.root} spacing={1}>
          <Grid container wrap='nowrap'>
            <ConferenceBrackets conf='afc' />
            <ConferenceBrackets conf='nfc' />
          </Grid>
          <SuperBowl />
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
