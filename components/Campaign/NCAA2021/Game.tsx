import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '90%'
  },
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  }
}))

interface GameProps {
  id: string
  home: string
  away: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Game = ({ id, home, away, onChange }: GameProps) => {
  const [selection, setSelection] = React.useState<string>('')
  const classes = useStyles()
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(evt.target.value)
    onChange(evt)
  }
  return (
    <div>
      <Paper className={classes.paper}>
        <FormControl component='fieldset' className={classes.formControl}>
          <RadioGroup
            aria-label={id}
            name={id}
            value={selection}
            onChange={handleChange}>
            <FormControlLabel value={home} control={<Radio />} label={home} />
            <FormControlLabel value={away} control={<Radio />} label={away} />
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  )
}

export default Game
