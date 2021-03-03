import * as React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { XL } from '@mui/Layout'
import { Contained } from '@mui/Button'
import Game from './Game'
import Round from './Round'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  },
  centerLayout: {
    justifyContent: 'space-evenly'
    // justifyContent: 'center',
  },
  leftLayout: {
    justifyContent: 'flex-start'
  },
  final4: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center !important',
    '& > div': {
      margin: theme.spacing(2)
    }
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

const NCAA2021 = () => {
  const classes = useStyles()
  const theme = useTheme()
  const centerBrackets = useMediaQuery(theme.breakpoints.up('xl'))

  const [entry, setEntry] = React.useState<any>({})
  const [locked, setLocked] = React.useState<boolean>(false)

  const handlePick = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEntry({ ...entry, [evt.target.name]: evt.target.value })
  }

  const getTeamId = (id: string) => {
    if (entry[id]) {
      return entry[id]
    }
    return ''
  }

  return (
    <XL>
      <Box textAlign='center'>
        <Contained onClick={() => setLocked(!locked)}>
          {locked ? 'Unlock' : 'Lock'}
        </Contained>
      </Box>
      <form>
        <div
          className={clsx(classes.root, {
            [classes.centerLayout]: centerBrackets,
            [classes.leftLayout]: !centerBrackets
          })}>
          <Round
            groups={['a', 'c']}
            round='first'
            callback={handlePick}
            locked={locked}
          />
          <Round
            groups={['a', 'c']}
            round='second'
            callback={handlePick}
            entry={(id) => getTeamId(id)}
            locked={locked}
          />
          <Round
            groups={['a', 'c']}
            round='sweet16'
            callback={handlePick}
            entry={(id) => getTeamId(id)}
            locked={locked}
          />
          <Round
            groups={['a', 'c']}
            round='elite8'
            callback={handlePick}
            entry={(id) => getTeamId(id)}
            locked={locked}
          />
          <div className={classes.final4}>
            <Game
              key='a-b'
              id='a-b'
              round='final4'
              home={entry['a-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
              away={entry['b-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
              onChange={(e) => handlePick(e)}
              locked={locked}
            />
            <Game
              key='championship'
              id='championship'
              round='championship'
              home={entry['a-b']}
              away={entry['c-d']}
              onChange={(e) => handlePick(e)}
              locked={locked}
            />
            <Game
              key='c-d'
              id='c-d'
              round='final4'
              home={entry['c-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
              away={entry['d-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
              onChange={(e) => handlePick(e)}
              locked={locked}
            />
          </div>
          <Round
            groups={['b', 'd']}
            round='elite8'
            callback={handlePick}
            entry={(id) => getTeamId(id)}
            locked={locked}
          />
          <Round
            groups={['b', 'd']}
            round='sweet16'
            callback={handlePick}
            entry={(id) => getTeamId(id)}
            locked={locked}
          />
          <Round
            groups={['b', 'd']}
            round='second'
            callback={handlePick}
            entry={(id) => getTeamId(id)}
            locked={locked}
          />
          <Round
            groups={['b', 'd']}
            round='first'
            callback={handlePick}
            locked={locked}
          />
        </div>
      </form>
    </XL>
  )
}

export default NCAA2021
