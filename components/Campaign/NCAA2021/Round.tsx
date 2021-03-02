import * as React from 'react'
import { getMatchesByRound, MatchParams } from './Seeds'
import Game from './Game'

interface RoundProps {
  round: 'first' | 'second' | 'sweet16' | 'elite8'
  groups?: string[]
  callback: (evt: React.ChangeEvent<HTMLInputElement>) => void
  entry?: (string) => string
}

const Round = ({
  round,
  groups,
  callback,
  entry
}: RoundProps): React.ReactElement => {
  return (
    <div key={groups ? `${round}-${groups.join('-')}` : round}>
      {groups.map((group) => {
        const matches = getMatchesByRound(round)
        return matches.map((match: MatchParams) => {
          const uniq = `${group}-${match.home}-${match.away}`
          const home = entry
            ? entry(`${group}-${match.home}`)
            : `${group}${match.home}`
          const away = entry
            ? entry(`${group}-${match.away}`)
            : `${group}${match.away}`
          return (
            <Game
              key={uniq}
              id={uniq}
              group={group}
              home={home}
              away={away}
              onChange={(e) => callback(e)}
            />
          )
        })
      })}
    </div>
  )
}

export default Round
