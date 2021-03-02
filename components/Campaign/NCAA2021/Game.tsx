import * as React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField'
import { getTeamById } from './Seeds'
import Team from './Team'

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: '1px',
    padding: '1px',
    width: '90%'
  },
  logoContainer: {
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(1)
  },
  logo: {
    width: '24px',
    height: '24px',
    objectFit: 'fill'
  },
  paper: {
    margin: '1px',
    border: `3px solid #333`,
    borderRadius: '6px',
    backgroundImage:
      'linear-gradient(to top right, rgba(255, 255, 255, 0.9), rgba(220, 220, 220, 0.9))'
  },
  east: {
    borderColor: '#ffc53a',
    boxShadow: '2px 2px 3px rgba(255, 197, 58, 0.5)'
  },
  midwest: {
    borderColor: '#007FFF',
    boxShadow: '2px 2px 3px rgba(0, 127, 255, 0.3)'
  },
  south: {
    borderColor: '#8CADA7',
    boxShadow: '2px 2px 3px rgba(140, 173, 167, 0.3)'
  },
  west: {
    borderColor: '#F44E3F',
    boxShadow: '2px 2px 3px rgba(244, 78, 63, 0.3)'
  }
}))

interface GameProps {
  id: string
  group?: string
  home?: string
  away?: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Game = ({ id, group, home, away, onChange }: GameProps) => {
  const [selection, setSelection] = React.useState<string>('')
  const classes = useStyles()
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(evt.target.value)
    onChange(evt)
  }
  const homeTeam = home ? getTeamById(home) : null
  const awayTeam = away ? getTeamById(away) : null

  return (
    <div>
      <Box
        className={clsx(classes.paper, {
          [classes.east]: group === 'a',
          [classes.midwest]: group === 'b',
          [classes.south]: group === 'c',
          [classes.west]: group === 'd'
        })}>
        <FormControl component='fieldset' className={classes.formControl}>
          <RadioGroup
            aria-label={id}
            name={id}
            value={selection}
            onChange={handleChange}>
            {home && homeTeam ? (
              <Team team={homeTeam} />
            ) : (
              // <Team
              //   id={homeTeam.id}
              //   seed={homeTeam.seed}
              //   name={homeTeam.name}
              //   logo={homeTeam.logo ? homeTeam.logo : null}
              // />
              <FormControlLabel control={<Radio disabled />} label='TBD' />
            )}
            {away && awayTeam ? (
              <Team team={awayTeam} />
            ) : (
              <FormControlLabel control={<Radio disabled />} label='TBD' />
            )}
          </RadioGroup>
        </FormControl>
        {/* {id === 'championship' && (
          <Box p={2}>
            <TextField
              disabled={!home || !away}
              type='number'
              name='tieBreaker'
              label='Total Combined Score (Tie Breaker)'
              variant='outlined'
              value={entry.tieBreaker}
              onChange={(e) => {
                setEntry({
                  ...entry,
                  tieBreaker: e.target.value
                })
              }}
              fullWidth
            />
          </Box>
        )} */}
      </Box>
    </div>
  )
}

export default Game
