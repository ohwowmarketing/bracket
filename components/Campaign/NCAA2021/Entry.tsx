import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Game from './Game'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    // justifyContent: 'space-evenly',
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

interface SeedProps {
  id: number
  group: string
  name: string
}

interface FirstRoundParams {
  home: number
  away: number
}

interface MatchParams {
  home: string
  away: string
}

const seeds: SeedProps[] = [
  { id: 1, group: 'a', name: 'Gonzaga' },
  { id: 2, group: 'a', name: 'Houston' },
  { id: 3, group: 'a', name: 'Oklahoma' },
  { id: 4, group: 'a', name: 'Iowa' },
  { id: 5, group: 'a', name: 'USC' },
  { id: 6, group: 'a', name: 'Virginia Tech' },
  { id: 7, group: 'a', name: 'Creighton' },
  { id: 8, group: 'a', name: 'Maryland' },
  { id: 9, group: 'a', name: 'Loyola Chicago' },
  { id: 10, group: 'a', name: 'Arkansas' },
  { id: 11, group: 'a', name: 'LSU' },
  { id: 12, group: 'a', name: 'Belmont' },
  { id: 13, group: 'a', name: 'Winthrop' },
  { id: 14, group: 'a', name: 'Colgate' },
  { id: 15, group: 'a', name: 'Grand Canyon' },
  { id: 16, group: 'a', name: 'Prairie View / North Carolina A&T	' },
  { id: 1, group: 'b', name: 'Ohio State' },
  { id: 2, group: 'b', name: 'Alabama' },
  { id: 3, group: 'b', name: 'Virginia' },
  { id: 4, group: 'b', name: 'Texas Tech' },
  { id: 5, group: 'b', name: 'Florida State' },
  { id: 6, group: 'b', name: 'Purdue' },
  { id: 7, group: 'b', name: 'Oklahoma State' },
  { id: 8, group: 'b', name: 'Xavier' },
  { id: 9, group: 'b', name: 'Minnesota' },
  { id: 10, group: 'b', name: 'UConn' },
  { id: 11, group: 'b', name: 'San Diego State' },
  { id: 12, group: 'b', name: 'Colorado State / Seton Hall' },
  { id: 13, group: 'b', name: 'Toledo' },
  { id: 14, group: 'b', name: 'Abilene Christian' },
  { id: 15, group: 'b', name: 'Texas State' },
  { id: 16, group: 'b', name: 'Eastern Washington' },
  { id: 1, group: 'c', name: 'Baylor' },
  { id: 2, group: 'c', name: 'Illinois' },
  { id: 3, group: 'c', name: 'Tennessee' },
  { id: 4, group: 'c', name: 'Texas' },
  { id: 5, group: 'c', name: 'Wisconsin' },
  { id: 6, group: 'c', name: 'Kansas' },
  { id: 7, group: 'c', name: 'Colorado' },
  { id: 8, group: 'c', name: 'Indiana' },
  { id: 9, group: 'c', name: 'BYU' },
  { id: 10, group: 'c', name: 'Drake' },
  { id: 11, group: 'c', name: 'VCU' },
  { id: 12, group: 'c', name: 'Ole Miss / Saint Louis' },
  { id: 13, group: 'c', name: 'UC Santa Barbara' },
  { id: 14, group: 'c', name: 'Liberty' },
  { id: 15, group: 'c', name: 'Siena' },
  { id: 16, group: 'c', name: `James Madison / Mount St. Mary's` },
  { id: 1, group: 'd', name: 'Michigan' },
  { id: 2, group: 'd', name: 'Villanova' },
  { id: 3, group: 'd', name: 'West Virginia' },
  { id: 4, group: 'd', name: 'Missouri' },
  { id: 5, group: 'd', name: 'Creighton' },
  { id: 6, group: 'd', name: 'Rutgers' },
  { id: 7, group: 'd', name: 'UCLA' },
  { id: 8, group: 'd', name: 'Louisville' },
  { id: 9, group: 'd', name: 'Oregon' },
  { id: 10, group: 'd', name: 'Florida' },
  { id: 11, group: 'd', name: 'Utah State' },
  { id: 12, group: 'd', name: 'Western Kentucky' },
  { id: 13, group: 'd', name: 'Wright State' },
  { id: 14, group: 'd', name: 'UNC Greensboro' },
  { id: 15, group: 'd', name: 'North Dakota State' },
  { id: 16, group: 'd', name: 'Vermont' }
]

const NCAA2021 = () => {
  const classes = useStyles()

  const [entry, setEntry] = React.useState<any>({})

  const getSeed = (group: string, id: number): SeedProps => {
    return seeds.find((s) => s.id === id && s.group === group)
  }

  const firstRound: FirstRoundParams[] = [
    { home: 1, away: 16 },
    { home: 8, away: 9 },
    { home: 5, away: 12 },
    { home: 4, away: 13 },
    { home: 6, away: 11 },
    { home: 3, away: 14 },
    { home: 7, away: 10 },
    { home: 2, away: 15 }
  ]

  const secondRound: MatchParams[] = [
    { home: '1-16', away: '8-9' },
    { home: '5-12', away: '4-13' },
    { home: '6-11', away: '3-14' },
    { home: '7-10', away: '2-15' }
  ]

  const sweet16: MatchParams[] = [
    { home: '1-16-8-9', away: '5-12-4-13' },
    { home: '6-11-3-14', away: '7-10-2-15' }
  ]

  const elite8: MatchParams[] = [
    { home: '1-16-8-9-5-12-4-13', away: '6-11-3-14-7-10-2-15' }
  ]

  const handlePick = (evt) => {
    setEntry({ ...entry, [evt.target.name]: evt.target.value })
  }

  return (
    <form>
      <div className={classes.root}>
        <div>
          {['a', 'b'].map((group) =>
            firstRound.map((m) => (
              <Game
                key={`${group}-${m.home}-${m.away}`}
                id={`${group}-${m.home}-${m.away}`}
                home={getSeed(group, m.home).name}
                away={getSeed(group, m.away).name}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
        <div>
          {['a', 'b'].map((group) =>
            secondRound.map((m) => (
              <Game
                key={`${group}-${m.home}-${m.away}`}
                id={`${group}-${m.home}-${m.away}`}
                home={entry[`${group}-${m.home}`]}
                away={entry[`${group}-${m.away}`]}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
        <div>
          {['a', 'b'].map((group) =>
            sweet16.map((m) => (
              <Game
                key={`${group}-${m.home}-${m.away}`}
                id={`${group}-${m.home}-${m.away}`}
                home={entry[`${group}-${m.home}`]}
                away={entry[`${group}-${m.away}`]}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
        <div>
          {['a', 'b'].map((group) =>
            elite8.map((m) => (
              <Game
                key={group}
                id={group}
                home={entry[`${group}-${m.home}`]}
                away={entry[`${group}-${m.away}`]}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
        <div>
          <Game
            key='a-b'
            id='a-b'
            home={entry.a}
            away={entry.b}
            onChange={(e) => handlePick(e)}
          />
        </div>
        <div>
          <Game
            key='championship'
            id='championship'
            home={entry['a-b']}
            away={entry['c-d']}
            onChange={(e) => handlePick(e)}
          />
        </div>
        <div>
          <Game
            key='c-d'
            id='c-d'
            home={entry.c}
            away={entry.d}
            onChange={(e) => handlePick(e)}
          />
        </div>
        <div>
          {['c', 'd'].map((group) =>
            elite8.map((m) => (
              <Game
                key={group}
                id={group}
                home={entry[`${group}-${m.home}`]}
                away={entry[`${group}-${m.away}`]}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
        <div>
          {['c', 'd'].map((group) =>
            sweet16.map((m) => (
              <Game
                key={`${group}-${m.home}-${m.away}`}
                id={`${group}-${m.home}-${m.away}`}
                home={entry[`${group}-${m.home}`]}
                away={entry[`${group}-${m.away}`]}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
        <div>
          {['c', 'd'].map((group) =>
            secondRound.map((m) => (
              <Game
                key={`${group}-${m.home}-${m.away}`}
                id={`${group}-${m.home}-${m.away}`}
                home={entry[`${group}-${m.home}`]}
                away={entry[`${group}-${m.away}`]}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
        <div>
          {['c', 'd'].map((group) =>
            firstRound.map((m) => (
              <Game
                key={`${group}-${m.home}-${m.away}`}
                id={`${group}-${m.home}-${m.away}`}
                home={getSeed(group, m.home).name}
                away={getSeed(group, m.away).name}
                onChange={(e) => handlePick(e)}
              />
            ))
          )}
        </div>
      </div>
    </form>
  )
}

export default NCAA2021
