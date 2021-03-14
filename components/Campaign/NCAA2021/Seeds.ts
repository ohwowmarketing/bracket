import { getTeam, TeamProps } from './Teams'

interface SeedProps {
  id: string
  seed: number
  group: string
  teamId: number
}

const seeds: SeedProps[] = [
  { id: 'a1', seed: 1, group: 'a', teamId: 27 },
  { id: 'a2', seed: 2, group: 'a', teamId: 2 },
  { id: 'a3', seed: 3, group: 'a', teamId: 44 },
  { id: 'a4', seed: 4, group: 'a', teamId: 13 },
  { id: 'a5', seed: 5, group: 'a', teamId: 9 },
  { id: 'a6', seed: 6, group: 'a', teamId: 6 },
  { id: 'a7', seed: 7, group: 'a', teamId: 49 },
  { id: 'a8', seed: 8, group: 'a', teamId: 25 },
  { id: 'a9', seed: 9, group: 'a', teamId: 42 },
  { id: 'a10', seed: 10, group: 'a', teamId: 26 },
  { id: 'a11', seed: 11, group: 'a', teamId: 28 },
  { id: 'a12', seed: 12, group: 'a', teamId: 76 },
  { id: 'a13', seed: 13, group: 'a', teamId: 53 },
  { id: 'a14', seed: 14, group: 'a', teamId: 1 },
  { id: 'a15', seed: 15, group: 'a', teamId: 77 },
  { id: 'a16', seed: 16, group: 'a', teamId: 78 },
  { id: 'b1', seed: 1, group: 'b', teamId: 15 },
  { id: 'b2', seed: 2, group: 'b', teamId: 19 },
  { id: 'b3', seed: 3, group: 'b', teamId: 21 },
  { id: 'b4', seed: 4, group: 'b', teamId: 58 },
  { id: 'b5', seed: 5, group: 'b', teamId: 10 },
  { id: 'b6', seed: 6, group: 'b', teamId: 54 },
  { id: 'b7', seed: 7, group: 'b', teamId: 34 },
  { id: 'b8', seed: 8, group: 'b', teamId: 31 },
  { id: 'b9', seed: 9, group: 'b', teamId: 29 },
  { id: 'b10', seed: 10, group: 'b', teamId: 56 },
  { id: 'b11', seed: 11, group: 'b', teamId: 61 },
  { id: 'b12', seed: 12, group: 'b', teamId: 50 },
  { id: 'b13', seed: 13, group: 'b', teamId: 65 },
  { id: 'b14', seed: 14, group: 'b', teamId: 11 },
  { id: 'b15', seed: 15, group: 'b', teamId: 16 },
  { id: 'b16', seed: 16, group: 'b', teamId: 79 },
  { id: 'c1', seed: 1, group: 'c', teamId: 18 },
  { id: 'c2', seed: 2, group: 'c', teamId: 17 },
  { id: 'c3', seed: 3, group: 'c', teamId: 59 },
  { id: 'c4', seed: 4, group: 'c', teamId: 32 },
  { id: 'c5', seed: 5, group: 'c', teamId: 43 },
  { id: 'c6', seed: 6, group: 'c', teamId: 38 },
  { id: 'c7', seed: 7, group: 'c', teamId: 7 },
  { id: 'c8', seed: 8, group: 'c', teamId: 24 },
  { id: 'c9', seed: 9, group: 'c', teamId: 14 },
  { id: 'c10', seed: 10, group: 'c', teamId: 37 },
  { id: 'c11', seed: 11, group: 'c', teamId: 72 },
  { id: 'c12', seed: 12, group: 'c', teamId: 73 },
  { id: 'c13', seed: 13, group: 'c', teamId: 22 },
  { id: 'c14', seed: 14, group: 'c', teamId: 74 },
  { id: 'c15', seed: 15, group: 'c', teamId: 8 },
  { id: 'c16', seed: 16, group: 'c', teamId: 75 },
  { id: 'd1', seed: 1, group: 'd', teamId: 4 },
  { id: 'd2', seed: 2, group: 'd', teamId: 33 },
  { id: 'd3', seed: 3, group: 'd', teamId: 3 },
  { id: 'd4', seed: 4, group: 'd', teamId: 36 },
  { id: 'd5', seed: 5, group: 'd', teamId: 57 },
  { id: 'd6', seed: 6, group: 'd', teamId: 46 },
  { id: 'd7', seed: 7, group: 'd', teamId: 12 },
  { id: 'd8', seed: 8, group: 'd', teamId: 52 },
  { id: 'd9', seed: 9, group: 'd', teamId: 63 },
  { id: 'd10', seed: 10, group: 'd', teamId: 66 },
  { id: 'd11', seed: 11, group: 'd', teamId: 67 },
  { id: 'd12', seed: 12, group: 'd', teamId: 62 },
  { id: 'd13', seed: 13, group: 'd', teamId: 68 },
  { id: 'd14', seed: 14, group: 'd', teamId: 69 },
  { id: 'd15', seed: 15, group: 'd', teamId: 70 },
  { id: 'd16', seed: 16, group: 'd', teamId: 71 }
]

interface MatchParams {
  home: string
  away: string
}

const firstRound: MatchParams[] = [
  { home: '1', away: '16' },
  { home: '8', away: '9' },
  { home: '5', away: '12' },
  { home: '4', away: '13' },
  { home: '6', away: '11' },
  { home: '3', away: '14' },
  { home: '7', away: '10' },
  { home: '2', away: '15' }
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

const getGroupSeed = (group: string, seed: number): SeedProps => {
  return seeds.find((s) => s.group === group && s.seed === seed)
}

const getGroupSeedById = (id: string): SeedProps => {
  return seeds.find((s) => s.id === id)
}

const getTeamByGroupSeed = (group: string, seed: number): TeamProps => {
  const groupSeed = getGroupSeed(group, seed)
  return getTeam(groupSeed.teamId)
}

const getTeamBySeedId = (id: string): TeamProps => {
  const groupSeed = getGroupSeedById(id)
  return getTeam(groupSeed.teamId)
}

const getMatchesByRound = (round: string): MatchParams[] | null => {
  switch (round) {
    case 'first':
      return firstRound
    case 'second':
      return secondRound
    case 'sweet16':
      return sweet16
    case 'elite8':
      return elite8
    default:
      return null
  }
}

const getGroupName = (id: string): string => {
  switch (id) {
    case 'a':
      return 'EAST'
    case 'b':
      return 'WEST'
    case 'c':
      return 'MIDWEST'
    case 'd':
      return 'SOUTH'
  }
}

export {
  getGroupName,
  getGroupSeed,
  getGroupSeedById,
  getTeamByGroupSeed,
  getTeamBySeedId,
  getMatchesByRound
}
export type { SeedProps, TeamProps, MatchParams }
