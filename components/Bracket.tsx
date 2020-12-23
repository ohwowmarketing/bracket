import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import useForm from '@hooks/useForm'
import { Contained } from '@mui/Button'
import { XS } from '@mui/Layout'
import Game from '@components/Game'
import { MiniHero } from '@components/Hero'
import { seeds } from '@lib/teams'
import { DataStore } from '@aws-amplify/datastore'
import { Entry } from 'src/models'
import useUser from 'hooks/useUser'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  matches: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  textField: {
    marginBottom: theme.spacing(2)
  }
}))

const Bracket = () => {
  const classes = useStyles()
  const { user } = useUser()
  const initialFormFields = {
    tieBreaker: 0,
    superBowl: null,
    afcConference: null,
    nfcConference: null,
    afcDivisional1: null,
    afcDivisional2: null,
    nfcDivisional1: null,
    nfcDivisional2: null,
    afcWildCard1: null,
    afcWildCard2: null,
    afcWildCard3: null,
    nfcWildCard1: null,
    nfcWildCard2: null,
    nfcWildCard3: null
  }

  const { values, handleChange, handleSubmit } = useForm(async () => {
    const entryData = {
      ...values,
      username: user.username,
      tieBreaker: parseInt(values.tieBreaker)
    }
    await DataStore.save(new Entry(entryData))
  }, initialFormFields)
  return (
    <>
      <MiniHero />
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs>
            <Game
              name='afcWildCard1'
              label='AFC Wild Card Game 1'
              home={seeds.afc4}
              away={seeds.afc5}
              onChange={handleChange}
              value={values.afcWildCard1}
            />
            <Game
              name='afcWildCard2'
              label='AFC Wild Card Game 2'
              home={seeds.afc3}
              away={seeds.afc6}
              onChange={handleChange}
              value={values.afcWildCard2}
            />
            <Game
              name='afcWildCard3'
              label='AFC Wild Card Game 3'
              home={seeds.afc2}
              away={seeds.afc7}
              onChange={handleChange}
              value={values.afcWildCard3}
            />
          </Grid>
          <Grid item xs>
            <>
              <Game
                name='afcDivisional1'
                label='AFC Divisional Round Game 1'
                home={seeds.afc1}
                away={values.afcWildCard1}
                onChange={handleChange}
                value={values.afcDivisional1}
              />
              <Game
                name='afcDivisional2'
                label='AFC Divisional Round Game 2'
                home={values.afcWildCard3}
                away={values.afcWildCard2}
                onChange={handleChange}
                value={values.afcDivisional2}
              />
            </>
          </Grid>
          <Grid item xs>
            <Game
              name='afcConference'
              label='AFC Conference Championship'
              home={values.afcDivisional1}
              away={values.afcDivisional2}
              onChange={handleChange}
              value={values.afcConference}
            />
          </Grid>
          <Grid item xs>
            <Game
              name='superBowl'
              label='Super Bowl'
              home={values.afcConference}
              away={values.nfcConference}
              onChange={handleChange}
              value={values.superBowl}
            />
          </Grid>
          <Grid item xs>
            <Game
              name='nfcConference'
              label='NFC Conference Championship'
              home={values.nfcDivisional1}
              away={values.nfcDivisional2}
              onChange={handleChange}
              value={values.nfcConference}
            />
          </Grid>
          <Grid item xs>
            <>
              <Game
                name='nfcDivisional1'
                label='NFC Divisional Round Game 1'
                home={seeds.nfc1}
                away={values.nfcWildCard1}
                onChange={handleChange}
                value={values.nfcDivisional1}
              />
              <Game
                name='nfcDivisional2'
                label='NFC Divisional Round Game 2'
                home={values.nfcWildCard3}
                away={values.nfcWildCard2}
                onChange={handleChange}
                value={values.nfcDivisional2}
              />
            </>
          </Grid>
          <Grid item xs>
            <>
              <Game
                name='nfcWildCard1'
                label='NFC Wild Card Game 1'
                home={seeds.nfc4}
                away={seeds.nfc5}
                onChange={handleChange}
                value={values.nfcWildCard1}
              />
              <Game
                name='nfcWildCard2'
                label='NFC Wild Card Game 2'
                home={seeds.nfc3}
                away={seeds.nfc6}
                onChange={handleChange}
                value={values.nfcWildCard2}
              />
              <Game
                name='nfcWildCard3'
                label='NFC Wild Card Game 3'
                home={seeds.nfc2}
                away={seeds.nfc7}
                onChange={handleChange}
                value={values.nfcWildCard3}
              />
            </>
          </Grid>
        </Grid>
        {values.superBowl !== null && (
          <XS align='center' className={classes.textField}>
            <TextField
              type='number'
              name='tieBreaker'
              label='Tie Breaker (Total Combined Score)'
              variant='outlined'
              value={values.tieBreaker}
              onChange={handleChange}
              fullWidth
            />
          </XS>
        )}

        <XS align='center'>
          <Contained type='submit' color='primary'>
            Submit Entry
          </Contained>
        </XS>
      </form>
    </>
  )
}

export default Bracket
