import * as React from 'react'
import { getMatchesByRound, MatchParams } from './Seeds'
import Game from './Game'

interface RoundProps {
  round: 'first' | 'second' | 'sweet16' | 'elite8'
  groups?: string[]
}

const Round = ({ round, groups }: RoundProps): React.ReactElement => {
  return (
    <div key={groups ? `${round}-${groups.join('-')}` : round}>
      {groups.map((group) => {
        const matches = getMatchesByRound(round)
        return matches.map((match: MatchParams) => {
          const teamId = (team: 'home' | 'away') => {
            const dash = round === 'first' ? '' : '-'
            return `${group}${dash}${match[team]}`
          }
          const uniq = `${group}-${match.home}-${match.away}`
          return (
            <Game
              key={uniq}
              id={uniq}
              round={round}
              home={teamId('home')}
              away={teamId('away')}
            />
          )
        })
      })}
    </div>
  )
}

export default Round
