import * as React from 'react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import axios from 'axios'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField'
import Hidden from '@material-ui/core/Hidden'
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import { Contained } from '@mui/Button'
import { XS, Box } from '@mui/Layout'
import { H4 } from '@mui/Typography'
import { entryByUsername } from 'src/graphql/queries'
import { createEntry, updateEntry } from 'src/graphql/mutations'
import { seeds } from '@lib/teams'
import { MiniHero } from '@components/Hero'
import TeamDisplay from '@components/TeamDisplay'
import Loading from '@components/Loading'

const initialFields = {
  tieBreaker: 0,
  superBowl: '',
  afcConference: '',
  nfcConference: '',
  afcDivisional1: '',
  afcDivisional2: '',
  nfcDivisional1: '',
  nfcDivisional2: '',
  afcWildCard1: '',
  afcWildCard2: '',
  afcWildCard3: '',
  nfcWildCard1: '',
  nfcWildCard2: '',
  nfcWildCard3: ''
}

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
  },
  formControl: {
    margin: theme.spacing(1),
    width: '90%'
  },
  paper: {
    margin: theme.spacing(1),
    // paddingTop: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  },
  legend: {
    fontSize: '0.85em',
    color: theme.palette.primary.main
  },
  label: {
    marginTop: `-${theme.spacing(4)}px`
  }
}))

const NFL2021 = () => {
  const classes = useStyles()

  const [entry, setEntry] = React.useState<any>(initialFields)
  const [waiting, setWaiting] = React.useState<boolean>(false)
  const [saved, setSaved] = React.useState<boolean>(false)
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
        const { data }: any = await API.graphql(
          graphqlOperation(entryByUsername, { username: `${user.username}`, limit: 1 })
        )
        if (data) {
          const [rawEntry] = data.entryByUsername.items
          const { _deleted, _lastChangedAt, createdAt, updatedAt, ...cleanEntry } = rawEntry
          if (cleanEntry) {
            setEntry(cleanEntry)
          }
        }
      } catch (e) {
        console.error(e)
        setEntry(initialFields)
      }
    }

    if (user) {
      checkForEntry()
    }
  }, [user])

  React.useEffect(() => {
    const addUserToMailchimp = async () => {
      try {
        const response = await axios.post('https://sggplayoffs.com/api/mc/add', {
          email: user.attributes.email,
          state: user.attributes['custom:state']
        })
        if (response && response.status === 200) {
          await Auth.updateUserAttributes(user, { 'custom:mc': '1' })
        }
      } catch (e) {
        console.error(e)
      }
    }
    if (user && user.attributes['custom:state'] && !user.attributes['custom:mc']) {
      addUserToMailchimp()
    }
  }, [user])

  // React.useEffect(() => {
  //   console.log(entry)
  // }, [entry])

  const handleSubmit = async e => {
    e.preventDefault()
    setWaiting(true)
    const entryData = {
      ...entry,
      username: user.username,
      tieBreaker: parseInt(entry.tieBreaker)
    }
    if (entry.id && entry._version) {
      try {
        const entryDataWithVersion = { ...entry, _version: parseInt(entry._version) }
        const result: any = await API.graphql({
          query: updateEntry,
          variables: { input: entryDataWithVersion },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
        setEntry({
          ...entry,
          _version: result.data.updateEntry._version
        })
        setWaiting(false)
        setSaved(true)
      } catch (e) {
        console.error(e)
      }
    } else {
      try {
        const { data }: any = await API.graphql({
          query: createEntry,
          variables: { input: entryData },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
        const newValues = {
          ...entryData,
          id: data.createEntry.id,
          _version: data.createEntry._version
        }
        setEntry(newValues)
        setWaiting(false)
        setSaved(true)
      } catch (e) {
        console.error(e)
      }
    }
  }

  const handleChange = event => {
    event.persist()
    setEntry(entry => ({
      ...entry,
      [event.target.name]: event.target.value
    }))
  }

  const handleCloseAlert = () => {
    setSaved(false)
  }

  const superBowlSeed = (rank: number) => {
    if (entry.afcConference && entry.nfcConference) {
      if (rank === 1) {
        return entry.nfcConference
      } else {
        return entry.afcConference
      }
    }
    return ''
  }

  const conferenceSeed = (conference: string, rank: number) => {
    if (entry[`${conference}Divisional1`] && entry[`${conference}Divisional2`]) {
      if (rank === 1) {
        if (entry[`${conference}Divisional1`] === seeds[`${conference}1`]) {
          return entry[`${conference}Divisional1`]
        } else {
          return entry[`${conference}Divisional2`]
        }
      } else if (rank === 2) {
        if (entry[`${conference}Divisional1`] === seeds[`${conference}1`]) {
          return entry[`${conference}Divisional2`]
        } else {
          return entry[`${conference}Divisional1`]
        }
      }
    }
    return ''
  }

  const divisionalSeed = (conference: string, rank: number) => {
    if (
      entry[`${conference}WildCard1`] &&
      entry[`${conference}WildCard2`] &&
      entry[`${conference}WildCard3`]
    ) {
      if (rank === 1) {
        return seeds[`${conference}1`]
      } else if (rank === 2) {
        if (entry[`${conference}WildCard3`] === seeds[`${conference}2`]) {
          return seeds[`${conference}2`]
        } else if (entry[`${conference}WildCard2`] === seeds[`${conference}3`]) {
          return seeds[`${conference}3`]
        } else {
          return entry[`${conference}WildCard1`]
        }
      } else if (rank === 3) {
        if (entry[`${conference}WildCard3`] === seeds[`${conference}7`]) {
          if (entry[`${conference}WildCard2`] === seeds[`${conference}6`]) {
            return seeds[`${conference}6`]
          } else {
            return entry[`${conference}WildCard1`]
          }
        } else {
          if (entry[`${conference}WildCard2`] === seeds[`${conference}3`]) {
            return seeds[`${conference}3`]
          } else {
            return entry[`${conference}WildCard1`]
          }
        }
      } else if (rank === 4) {
        if (entry[`${conference}WildCard3`] === seeds[`${conference}7`]) {
          return seeds[`${conference}7`]
        } else if (entry[`${conference}WildCard2`] === seeds[`${conference}6`]) {
          return seeds[`${conference}6`]
        } else {
          return entry[`${conference}WildCard1`]
        }
      }
    }
    return ''
  }

  return (
    <>
      <MiniHero />
      {entry ? (
        <form onSubmit={handleSubmit}>
          <Grid container className={classes.root} spacing={1}>
            <Grid container wrap='nowrap'>
              <Grid container alignItems='center' direction='row'>
                <Grid item xs>
                  <Hidden mdUp implementation='css'>
                    <H4 align='center'>AFC</H4>
                  </Hidden>
                </Grid>
                <Grid item container xs={12} md={4}>
                  <Grid container direction='column'>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Wild Card (10 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='afcWildCard1'
                            name='afcWildCard1'
                            value={entry.afcWildCard1}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.afc4}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.afc4} />}
                            />
                            <FormControlLabel
                              value={seeds.afc5}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.afc5} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Wild Card (10 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='afcWildCard2'
                            name='afcWildCard2'
                            value={entry.afcWildCard2}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.afc3}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.afc3} />}
                            />
                            <FormControlLabel
                              value={seeds.afc6}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.afc6} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Wild Card (10 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='afcWildCard3'
                            name='afcWildCard3'
                            value={entry.afcWildCard3}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.afc2}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.afc2} />}
                            />
                            <FormControlLabel
                              value={seeds.afc7}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.afc7} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={4}>
                  <Grid container direction='column'>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Divisional (20 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='afcDivisional1'
                            name='afcDivisional1'
                            value={entry.afcDivisional1}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.afc1}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.afc1} />}
                            />
                            <FormControlLabel
                              disabled={!divisionalSeed('afc', 4)}
                              value={divisionalSeed('afc', 4)}
                              control={<Radio />}
                              label={<TeamDisplay id={divisionalSeed('afc', 4)} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Divisional (20 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='afcDivisional2'
                            name='afcDivisional2'
                            value={entry.afcDivisional2}
                            onChange={handleChange}>
                            <FormControlLabel
                              disabled={!divisionalSeed('afc', 2)}
                              value={divisionalSeed('afc', 2)}
                              control={<Radio />}
                              label={<TeamDisplay id={divisionalSeed('afc', 2)} />}
                            />
                            <FormControlLabel
                              disabled={!divisionalSeed('afc', 3)}
                              value={divisionalSeed('afc', 3)}
                              control={<Radio />}
                              label={<TeamDisplay id={divisionalSeed('afc', 3)} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={4}>
                  <Grid container direction='column'>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Conference (40 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='afcConference'
                            name='afcConference'
                            value={entry.afcConference}
                            onChange={handleChange}>
                            <FormControlLabel
                              disabled={!conferenceSeed('afc', 1)}
                              value={conferenceSeed('afc', 1)}
                              control={<Radio />}
                              label={<TeamDisplay id={conferenceSeed('afc', 1)} />}
                            />
                            <FormControlLabel
                              disabled={!conferenceSeed('afc', 2)}
                              value={conferenceSeed('afc', 2)}
                              control={<Radio />}
                              label={<TeamDisplay id={conferenceSeed('afc', 2)} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container alignItems='center' direction='row-reverse'>
                <Grid item xs>
                  <Hidden mdUp implementation='css'>
                    <H4 align='center'>NFC</H4>
                  </Hidden>
                </Grid>
                <Grid item container xs={12} md={4}>
                  <Grid container direction='column'>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Wild Card (10 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='nfcWildCard1'
                            name='nfcWildCard1'
                            value={entry.nfcWildCard1}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.nfc4}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.nfc4} />}
                            />
                            <FormControlLabel
                              value={seeds.nfc5}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.nfc5} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Wild Card (10 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='nfcWildCard2'
                            name='nfcWildCard2'
                            value={entry.nfcWildCard2}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.nfc3}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.nfc3} />}
                            />
                            <FormControlLabel
                              value={seeds.nfc6}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.nfc6} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Wild Card (10 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='nfcWildCard3'
                            name='nfcWildCard3'
                            value={entry.nfcWildCard3}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.nfc2}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.nfc2} />}
                            />
                            <FormControlLabel
                              value={seeds.nfc7}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.nfc7} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={4}>
                  <Grid container direction='column'>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Divisional (20 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='nfcDivisional1'
                            name='nfcDivisional1'
                            value={entry.nfcDivisional1}
                            onChange={handleChange}>
                            <FormControlLabel
                              value={seeds.nfc1}
                              control={<Radio />}
                              label={<TeamDisplay id={seeds.nfc1} />}
                            />
                            <FormControlLabel
                              disabled={!divisionalSeed('nfc', 4)}
                              value={divisionalSeed('nfc', 4)}
                              control={<Radio />}
                              label={<TeamDisplay id={divisionalSeed('nfc', 4)} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Divisional (20 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='nfcDivisional2'
                            name='nfcDivisional2'
                            value={entry.nfcDivisional2}
                            onChange={handleChange}>
                            <FormControlLabel
                              disabled={!divisionalSeed('nfc', 2)}
                              value={divisionalSeed('nfc', 2)}
                              control={<Radio />}
                              label={<TeamDisplay id={divisionalSeed('nfc', 2)} />}
                            />
                            <FormControlLabel
                              disabled={!divisionalSeed('nfc', 3)}
                              value={divisionalSeed('nfc', 3)}
                              control={<Radio />}
                              label={<TeamDisplay id={divisionalSeed('nfc', 3)} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={4}>
                  <Grid container direction='column'>
                    <Grid item xs>
                      <Paper className={classes.paper}>
                        <FormControl component='fieldset' className={classes.formControl}>
                          <FormLabel component='legend' className={classes.legend}>
                            Conference (40 points)
                          </FormLabel>
                          <RadioGroup
                            aria-label='nfcConference'
                            name='nfcConference'
                            value={entry.nfcConference}
                            onChange={handleChange}>
                            <FormControlLabel
                              disabled={!conferenceSeed('nfc', 1)}
                              value={conferenceSeed('nfc', 1)}
                              control={<Radio />}
                              label={<TeamDisplay id={conferenceSeed('nfc', 1)} />}
                            />
                            <FormControlLabel
                              disabled={!conferenceSeed('nfc', 2)}
                              value={conferenceSeed('nfc', 2)}
                              control={<Radio />}
                              label={<TeamDisplay id={conferenceSeed('nfc', 2)} />}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction='row' justify='center'>
              <Grid item xs={12} md={4}>
                <Hidden mdUp implementation='css'>
                  <H4 align='center'>Super Bowl</H4>
                </Hidden>
                <Paper className={classes.paper}>
                  <FormControl component='fieldset' className={classes.formControl}>
                    <FormLabel component='legend' className={classes.legend}>
                      Super Bowl (80 points)
                    </FormLabel>
                    <RadioGroup
                      aria-label='superBowl'
                      name='superBowl'
                      value={entry.superBowl}
                      onChange={handleChange}>
                      <FormControlLabel
                        disabled={!superBowlSeed(1)}
                        value={superBowlSeed(1)}
                        control={<Radio />}
                        label={<TeamDisplay id={superBowlSeed(1)} />}
                      />
                      <FormControlLabel
                        disabled={!superBowlSeed(2)}
                        value={superBowlSeed(2)}
                        control={<Radio />}
                        label={<TeamDisplay id={superBowlSeed(2)} />}
                      />
                    </RadioGroup>
                    <div className={classes.textFieldContainer}>
                      <TextField
                        disabled={superBowlSeed(1) === '' || superBowlSeed(2) === ''}
                        type='number'
                        name='tieBreaker'
                        label='Total Combined Score (Tie Breaker)'
                        variant='outlined'
                        value={entry.tieBreaker}
                        onChange={e => {
                          setEntry({
                            ...entry,
                            tieBreaker: e.target.value
                          })
                        }}
                        fullWidth
                      />
                    </div>
                  </FormControl>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <XS align='center'>
            <>
              {saved && (
                <Box m={2}>
                  <Alert onClose={handleCloseAlert} severity='success'>
                    Entry has been saved!
                  </Alert>
                </Box>
              )}
              <Box mt={2}>
                <Contained type='submit' color='primary'>
                  <>
                    {waiting ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : (
                      <>{entry && entry.id ? 'Update Entry' : 'Submit Entry'}</>
                    )}
                  </>
                </Contained>
              </Box>
            </>
          </XS>
        </form>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default NFL2021
