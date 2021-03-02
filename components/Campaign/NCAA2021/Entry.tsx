import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Game from './Game'
import Round from './Round'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    // justifyContent: 'space-evenly',
    // justifyContent: 'center',
    // overflowX: 'auto',
    // alignItems: 'center',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
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

  const [entry, setEntry] = React.useState<any>({})

  const handlePick = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEntry({ ...entry, [evt.target.name]: evt.target.value })
  }

  const getTeamId = (id: string) => {
    if (entry[id]) {
      return entry[id]
    }
    return ''
  }

  console.log(entry.a)

  return (
    <form>
      <div className={classes.root}>
        <Round groups={['a', 'b']} round='first' callback={handlePick} />
        <Round
          groups={['a', 'b']}
          round='second'
          callback={handlePick}
          entry={(id) => getTeamId(id)}
        />
        <Round
          groups={['a', 'b']}
          round='sweet16'
          callback={handlePick}
          entry={(id) => getTeamId(id)}
        />
        <Round
          groups={['a', 'b']}
          round='elite8'
          callback={handlePick}
          entry={(id) => getTeamId(id)}
        />
        <div>
          <Game
            key='a-b'
            id='a-b'
            home={entry['a-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
            away={entry['b-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
            onChange={(e) => handlePick(e)}
          />
          <Game
            key='championship'
            id='championship'
            home={entry['a-b']}
            away={entry['c-d']}
            onChange={(e) => handlePick(e)}
          />
          <Game
            key='c-d'
            id='c-d'
            home={entry['c-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
            away={entry['d-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15']}
            onChange={(e) => handlePick(e)}
          />
        </div>
        <Round
          groups={['c', 'd']}
          round='elite8'
          callback={handlePick}
          entry={(id) => getTeamId(id)}
        />
        <Round
          groups={['c', 'd']}
          round='sweet16'
          callback={handlePick}
          entry={(id) => getTeamId(id)}
        />
        <Round
          groups={['c', 'd']}
          round='second'
          callback={handlePick}
          entry={(id) => getTeamId(id)}
        />
        <Round groups={['c', 'd']} round='first' callback={handlePick} />
      </div>
    </form>
  )
}

export default NCAA2021
