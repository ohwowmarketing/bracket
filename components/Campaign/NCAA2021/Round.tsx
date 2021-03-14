import * as React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { getMatchesByRound, MatchParams } from './Seeds'
import Game from './Game'
import { uuid } from 'uuidv4'

const useStyles = makeStyles(() => ({
  round: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  elite8: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

interface RoundProps {
  round: 'first' | 'second' | 'sweet16' | 'elite8'
  groups?: string[]
}

const Round = ({ round, groups }: RoundProps): React.ReactElement => {
  const classes = useStyles()
  return (
    <div
      key={groups ? `${round}-${groups.join('-')}` : uuid()}
      className={clsx({
        [classes.elite8]: round === 'elite8',
        [classes.round]: round !== 'elite8'
      })}>
      {groups.map((group, index) => {
        const matches = getMatchesByRound(round)
        return matches.map((match: MatchParams) => {
          const teamId = (team: 'home' | 'away') => {
            const dash = round === 'first' ? '' : '-'
            return `${group}${dash}${match[team]}`
          }
          const uniq = `${group}-${match.home}-${match.away}`
          const showPromo = Boolean(round === 'elite8' && index === 0)
          return (
            <div key={uniq}>
              <Game
                id={uniq}
                round={round}
                home={teamId('home')}
                away={teamId('away')}
              />
              {showPromo && (
                <Box my={'180px'}>
                  <Link href='http://dkng.co/1000SGG' key={`${uniq}-promo`}>
                    <img
                      src='/promo/draftkings.gif'
                      width='150'
                      height='300'
                      alt='DraftKings Promo: Bet $4 to win $256'
                    />
                  </Link>
                </Box>
              )}
            </div>
          )
        })
      })}
    </div>
  )
}

export default Round
