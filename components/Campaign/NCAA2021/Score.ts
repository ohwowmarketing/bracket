import { PicksProps } from '@components/Campaign/NCAA2021/Picks'
import { LeaderProps } from '@components/Campaign/NCAA2021/Leaderboard'
import { results } from '@components/Campaign/NCAA2021/Results'

export const getScore = (picks: PicksProps): LeaderProps => {
  const firstRound = [
    'a-1-16',
    'a-2-15',
    'a-3-14',
    'a-4-13',
    'a-5-12',
    'a-6-11',
    'a-7-10',
    'a-8-9',
    'b-1-16',
    'b-2-15',
    'b-3-14',
    'b-4-13',
    'b-5-12',
    'b-6-11',
    'b-7-10',
    'b-8-9',
    'c-1-16',
    'c-2-15',
    'c-3-14',
    'c-4-13',
    'c-5-12',
    'c-6-11',
    'c-7-10',
    'c-8-9',
    'd-1-16',
    'd-2-15',
    'd-3-14',
    'd-4-13',
    'd-5-12',
    'd-6-11',
    'd-7-10',
    'd-8-9'
  ]

  const secondRound = [
    'a-1-16-8-9',
    'a-5-12-4-13',
    'a-6-11-3-14',
    'a-7-10-2-15',
    'b-1-16-8-9',
    'b-5-12-4-13',
    'b-6-11-3-14',
    'b-7-10-2-15',
    'c-1-16-8-9',
    'c-5-12-4-13',
    'c-6-11-3-14',
    'c-7-10-2-15',
    'd-1-16-8-9',
    'd-5-12-4-13',
    'd-6-11-3-14',
    'd-7-10-2-15'
  ]

  const sweet16 = [
    'a-1-16-8-9-5-12-4-13',
    'a-6-11-3-14-7-10-2-15',
    'b-1-16-8-9-5-12-4-13',
    'b-6-11-3-14-7-10-2-15',
    'c-1-16-8-9-5-12-4-13',
    'c-6-11-3-14-7-10-2-15',
    'd-1-16-8-9-5-12-4-13',
    'd-6-11-3-14-7-10-2-15'
  ]

  const elite8 = [
    'a-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15',
    'b-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15',
    'c-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15',
    'd-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15'
  ]

  const final4 = ['a-b', 'c-d']

  let r64 = 0
  let r32 = 0
  let s16 = 0
  let e8 = 0
  let f4 = 0
  let champ = 0
  let total = 0

  firstRound.map((i) => {
    if (results[i] && results[i] === picks.selections[i]) {
      r64 += 10
      total += 10
    }
  })

  secondRound.map((i) => {
    if (results[i] && results[i] === picks.selections[i]) {
      r32 += 20
      total += 20
    }
  })

  sweet16.map((i) => {
    if (results[i] && results[i] === picks.selections[i]) {
      s16 += 40
      total += 40
    }
  })

  elite8.map((i) => {
    if (results[i] && results[i] === picks.selections[i]) {
      e8 += 80
      total += 80
    }
  })

  final4.map((i) => {
    if (results[i] && results[i] === picks.selections[i]) {
      f4 += 160
      total += 160
    }
  })

  if (
    results.championship &&
    results.championship === picks.selections.championship
  ) {
    champ += 320
    total += 320
  }

  return {
    username: picks.username,
    r64: r64.toString(),
    r32: r32.toString(),
    s16: s16.toString(),
    e8: e8.toString(),
    f4: f4.toString(),
    champ: champ.toString(),
    total: total.toString(),
    tiebreaker: picks.tiebreaker.toString()
  }
}
