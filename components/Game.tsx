import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import { teamById, TeamParams } from '@lib/teams'
import Label from '@components/Label'

const useStyles = makeStyles((theme: Theme) => ({
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

interface GameProps {
  name: string
  label: string
  home: string
  away: string
  value: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Game = ({ name, label, home, away, value = '', onChange }: GameProps) => {
  const classes = useStyles()
  const [pick, setPick] = React.useState<string>(value)
  React.useEffect(() => {
    setPick(value)
  }, [value])
  const homeTeam: TeamParams = home ? teamById(home) : null
  const awayTeam: TeamParams = away ? teamById(away) : null
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPick(evt.target.value)
    if (onChange) {
      onChange(evt)
    }
  }

  return (
    <Paper className={classes.paper}>
      <FormControl component='fieldset' className={classes.formControl}>
        <>
          <FormLabel component='legend' className={classes.legend}>
            {label}
          </FormLabel>
          <RadioGroup aria-label={name} name={name} value={pick} onChange={handleChange}>
            {homeTeam ? (
              <FormControlLabel
                value={homeTeam.id}
                control={<Radio />}
                label={<Label name={homeTeam.name} logo={homeTeam.logo} />}
              />
            ) : (
              <FormControlLabel disabled control={<Radio />} label='TBD' />
            )}
            {awayTeam ? (
              <FormControlLabel
                value={awayTeam.id}
                control={<Radio />}
                label={<Label name={awayTeam.name} logo={awayTeam.logo} />}
              />
            ) : (
              <FormControlLabel disabled control={<Radio />} label='TBD' />
            )}
          </RadioGroup>
        </>
      </FormControl>
    </Paper>
  )
}

export default Game
