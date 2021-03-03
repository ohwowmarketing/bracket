import * as React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField'
import { Contained } from '@mui/Button'
import Link from '@components/Link'
import { getTeamById } from './Seeds'
import Team from './Team'

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
      'linear-gradient(to top right, rgba(255, 255, 255, 0.9), rgba(220, 220, 220, 0.9))'
  },
  topLeft: {
    borderColor: '#ffc53a',
    boxShadow: '2px 2px 3px rgba(255, 197, 58, 0.5)'
  },
  bottomLeft: {
    borderColor: '#007FFF',
    boxShadow: '2px 2px 3px rgba(0, 127, 255, 0.3)'
  },
  topRight: {
    borderColor: '#8CADA7',
    boxShadow: '2px 2px 3px rgba(140, 173, 167, 0.3)'
  },
  bottomRight: {
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
}

const Game = ({ id, group, round, home, away, onChange }: GameProps) => {
  const [selection, setSelection] = React.useState<string>('')
  const [tieBreaker, setTieBreaker] = React.useState<number>(0)
  const classes = useStyles()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(evt.target.value)
    onChange(evt)
  }

  const handleTieBreaker = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTieBreaker(parseInt(evt.target.value))
    onChange(evt)
  }
  const homeTeam = home ? getTeamById(home) : null
  const awayTeam = away ? getTeamById(away) : null

  const matchLabel = (): string => {
    if (round === 'first') {
      return 'First Round (10 points)'
    }
    if (round === 'second') {
      return 'Second Round (20 points)'
    }
    if (round == 'sweet16') {
      return 'Sweet 16 (40 points)'
    }
    if (round === 'elite8') {
      return 'Elite 8 (80 points)'
    }
    if (round === 'final4') {
      return 'Final 4 (160 points)'
    }
    return 'Championship (320 points)'
  }

  return (
    <div>
      <Box
        className={clsx(classes.paper, {
          [classes.topLeft]: group === 'a',
          [classes.bottomLeft]: group === 'b',
          [classes.topRight]: group === 'c',
          [classes.bottomRight]: group === 'd'
        })}>
        <FormControl component='fieldset' className={classes.formControl}>
          <FormLabel component='legend' className={classes.legend}>
            {matchLabel()}
          </FormLabel>
          <RadioGroup
            aria-label={id}
            name={id}
            value={selection}
            onChange={handleChange}>
            {home && homeTeam ? (
              <Team team={homeTeam} />
            ) : (
              <FormControlLabel
                control={<Radio size='small' disabled />}
                label='TBD'
                className={classes.label}
              />
            )}
            {away && awayTeam ? (
              <Team team={awayTeam} />
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
          <>
            <Box p={2}>
              <FormLabel component='legend' className={classes.totalScore}>
                {`Total Combined Score:`}
              </FormLabel>

              <TextField
                disabled={!home || !away}
                type='number'
                name='tieBreaker'
                label='Tie Breaker'
                variant='outlined'
                value={tieBreaker}
                onChange={handleTieBreaker}
                fullWidth
              />
            </Box>
            <Box my={2} textAlign='center'>
              <Contained
                disabled={tieBreaker === 0}
                component={Link}
                href='/ncaa/entry'
                color='primary'
                align='center'>
                <span className={classes.white}>Submit Entry</span>
              </Contained>
            </Box>
          </>
        )}
      </Box>
    </div>
  )
}

export default Game
