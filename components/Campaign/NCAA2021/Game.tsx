import * as React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Championship from './Championship'
import { getTeamById } from './Seeds'
import Team from './Team'
import { results } from './Results'

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: '1px',
    padding: '1px'
    // width: '90%'
  },
  legend: {
    fontSize: '0.85em'
    // color: theme.palette.primary.main
  },
  totalScore: {
    fontSize: '0.85em',
    marginBottom: '10px'
  },
  logoContainer: {
    width: '20px',
    height: '20px',
    marginRight: theme.spacing(1)
  },
  logo: {
    width: '20px',
    height: '20px',
    objectFit: 'fill'
  },
  label: {
    '& > span': {
      paddingTop: '2px',
      paddingBottom: '2px'
    }
  },
  paper: {
    margin: '5px',
    border: `3px solid #333`,
    borderRadius: '6px',
    padding: '2px',
    backgroundImage:
      'linear-gradient(to top right, rgba(255, 255, 255, 0.9), rgba(220, 220, 220, 0.9))',
    boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)'
  },
  gold: {
    borderColor: '#d4af37',
    boxShadow: '2px 2px 3px rgba(212, 175, 55, 0.5)'
  },
  topLeft: {
    borderColor: '#ffc53a',
    boxShadow: '2px 2px 3px rgba(255, 197, 58, 0.5)'
  },
  bottomLeft: {
    borderColor: '#8CADA7',
    boxShadow: '2px 2px 3px rgba(140, 173, 167, 0.3)'
  },
  topRight: {
    borderColor: '#007FFF',
    boxShadow: '2px 2px 3px rgba(0, 127, 255, 0.3)'
  },
  bottomRight: {
    borderColor: '#F44E3F',
    boxShadow: '2px 2px 3px rgba(244, 78, 63, 0.3)'
  },
  correctPick: {
    borderColor: '#43a047',
    boxShadow: '2px 2px 3px rgba(67, 160, 71, 0.3)'
  },
  incorrectPick: {
    borderColor: '#F44E3F',
    boxShadow: '2px 2px 3px rgba(244, 78, 63, 0.3)'
  },
  white: {
    color: '#fff'
  }
}))

interface GameProps {
  id: string
  group?: string
  round: 'first' | 'second' | 'sweet16' | 'elite8' | 'final4' | 'championship'
  home?: string
  away?: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  locked: boolean
}

const Game = ({
  id,
  group,
  round,
  home,
  away,
  onChange,
  locked
}: GameProps) => {
  const [selection, setSelection] = React.useState<string>('')

  const classes = useStyles()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(evt.target.value)
    onChange(evt)
  }

  const homeTeam = home ? getTeamById(home) : null
  const awayTeam = away ? getTeamById(away) : null

  const matchPoints = (label: string, points: number): string => {
    if (locked && results[id] !== selection) {
      return label
    }
    return `${label} (${points} points)`
  }

  const matchLabel = (): string => {
    switch (round) {
      case 'first':
        return matchPoints('First Round', 10)
      case 'second':
        return matchPoints('Second Round', 20)
      case 'sweet16':
        return matchPoints('Sweet 16', 40)
      case 'elite8':
        return matchPoints('Elite 8', 80)
      case 'final4':
        return matchPoints('Final 4', 160)
      case 'championship':
        return matchPoints('Championship', 320)
    }
  }

  return (
    <div>
      <Box
        className={clsx(classes.paper, {
          // [classes.topLeft]: !locked && group === 'a',
          // [classes.topRight]: !locked && group === 'b',
          // [classes.bottomLeft]: !locked && group === 'c',
          // [classes.bottomRight]: !locked && group === 'd',
          [classes.gold]: !locked,
          [classes.correctPick]: locked && results[id] === selection,
          [classes.incorrectPick]: locked && results[id] !== selection
        })}>
        <FormControl component='fieldset' className={classes.formControl}>
          <FormLabel component='legend' className={classes.legend}>
            {matchLabel()}
          </FormLabel>
          <RadioGroup name={id} value={selection} onChange={handleChange}>
            {home && homeTeam ? (
              <Team team={homeTeam} locked={locked} />
            ) : (
              <FormControlLabel
                control={<Radio size='small' disabled />}
                label='TBD'
                className={classes.label}
              />
            )}
            {away && awayTeam ? (
              <Team team={awayTeam} locked={locked} />
            ) : (
              <FormControlLabel
                control={<Radio size='small' disabled />}
                label='TBD'
                className={classes.label}
              />
            )}
          </RadioGroup>
        </FormControl>
        {round === 'championship' && (
          <Championship
            disabled={!home || !away}
            onChange={onChange}
            locked={locked}
          />
        )}
      </Box>
    </div>
  )
}

export default Game
