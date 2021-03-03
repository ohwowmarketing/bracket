interface TeamProps {
  id: string
  seed: number
  group: string
  name: string
  logo?: string
}

interface MatchParams {
  home: string
  away: string
}

const seeds: TeamProps[] = [
  { id: 'a1', seed: 1, group: 'a', name: 'Illinois', logo: 'illinois.svg' },
  {
    id: 'a2',
    seed: 2,
    group: 'a',
    name: 'Alabama',
    logo: 'alabama.svg'
  },
  { id: 'a3', seed: 3, group: 'a', name: 'Kansas', logo: 'kansas.svg' },
  { id: 'a4', seed: 4, group: 'a', name: 'Texas Tech', logo: 'texas-tech.svg' },
  { id: 'a5', seed: 5, group: 'a', name: 'Creighton', logo: 'creighton.svg' },
  { id: 'a6', seed: 6, group: 'a', name: 'Maryland', logo: 'maryland.svg' },
  { id: 'a7', seed: 7, group: 'a', name: 'VA Tech', logo: 'virginia-tech.svg' },
  { id: 'a8', seed: 8, group: 'a', name: 'BYU', logo: 'byu.svg' },
  {
    id: 'a9',
    seed: 9,
    group: 'a',
    name: 'Loyola Chicago',
    logo: 'loyola-chicago.svg'
  },
  { id: 'a10', seed: 10, group: 'a', name: 'UConn', logo: 'uconn.svg' },
  {
    id: 'a11',
    seed: 11,
    group: 'a',
    name: 'GA Tech',
    logo: 'georgia-tech.svg'
  },
  {
    id: 'a12',
    seed: 12,
    group: 'a',
    name: 'Wichita State',
    logo: 'wichita-st.svg'
  },
  { id: 'a13', seed: 13, group: 'a', name: 'UNCG', logo: 'unc-greensboro.svg' },
  { id: 'a14', seed: 14, group: 'a', name: 'Liberty', logo: 'liberty.svg' },
  { id: 'a15', seed: 15, group: 'a', name: 'Siena', logo: 'siena.svg' },
  { id: 'a16', seed: 16, group: 'a', name: 'Texas State / Bryant' },
  { id: 'b1', seed: 1, group: 'b', name: 'Gonzaga', logo: 'gonzaga.svg' },
  { id: 'b2', seed: 2, group: 'b', name: 'Iowa', logo: 'iowa.svg' },
  { id: 'b3', seed: 3, group: 'b', name: 'FSU', logo: 'florida-st.svg' },
  { id: 'b4', seed: 4, group: 'b', name: 'Oklahoma', logo: 'oklahoma.svg' },
  {
    id: 'b5',
    seed: 5,
    group: 'b',
    name: 'USC',
    logo: 'southern-california.svg'
  },
  { id: 'b6', seed: 6, group: 'b', name: 'Colorado', logo: 'colorado.svg' },
  { id: 'b7', seed: 7, group: 'b', name: 'UCLA', logo: 'ucla.svg' },
  { id: 'b8', seed: 8, group: 'b', name: 'Tennessee', logo: 'tennessee.svg' },
  {
    id: 'b9',
    seed: 9,
    group: 'b',
    name: 'San Diego State',
    logo: 'san-diego-st.svg'
  },
  {
    id: 'b10',
    seed: 10,
    group: 'b',
    name: 'Louisville',
    logo: 'louisville.svg'
  },
  { id: 'b11', seed: 11, group: 'b', name: 'Michigan State / Boise State' },
  { id: 'b12', seed: 12, group: 'b', name: 'Seton Hall / Drake' },
  { id: 'b13', seed: 13, group: 'b', name: 'Belmont', logo: 'belmont.svg' },
  {
    id: 'b14',
    seed: 14,
    group: 'b',
    name: 'Eastern Washington',
    logo: 'eastern-wash.svg'
  },
  {
    id: 'b15',
    seed: 15,
    group: 'b',
    name: 'South Dakota State',
    logo: 'south-dakota-st.svg'
  },
  { id: 'b16', seed: 16, group: 'b', name: 'Prairie View A&M / NC A&T' },
  { id: 'c1', seed: 1, group: 'c', name: 'Michigan', logo: 'michigan.svg' },
  {
    id: 'c2',
    seed: 2,
    group: 'c',
    name: 'West Virginia',
    logo: 'west-virginia.svg'
  },
  { id: 'c3', seed: 3, group: 'c', name: 'Houston', logo: 'houston.svg' },
  { id: 'c4', seed: 4, group: 'c', name: 'Arkansas', logo: 'arkansas.svg' },
  { id: 'c5', seed: 5, group: 'c', name: 'Texas', logo: 'texas.svg' },
  { id: 'c6', seed: 6, group: 'c', name: 'Wisconsin', logo: 'wisconsin.svg' },
  { id: 'c7', seed: 7, group: 'c', name: 'Virginia', logo: 'virginia.svg' },
  { id: 'c8', seed: 8, group: 'c', name: 'Florida', logo: 'florida.svg' },
  { id: 'c9', seed: 9, group: 'c', name: 'Oregon', logo: 'oregon.svg' },
  { id: 'c10', seed: 10, group: 'c', name: 'LSU', logo: 'lsu.svg' },
  {
    id: 'c11',
    seed: 11,
    group: 'c',
    name: 'St. Bonaventure',
    logo: 'st-bonaventure.svg'
  },
  { id: 'c12', seed: 12, group: 'c', name: 'Toledo', logo: 'toledo.svg' },
  {
    id: 'c13',
    seed: 13,
    group: 'c',
    name: 'UCSB',
    logo: 'uc-santa-barbara.svg'
  },
  { id: 'c14', seed: 14, group: 'c', name: 'Navy', logo: 'navy.svg' },
  {
    id: 'c15',
    seed: 15,
    group: 'c',
    name: 'Grand Canyon',
    logo: 'grand-canyon.svg'
  },
  { id: 'c16', seed: 16, group: 'c', name: 'JMU', logo: 'james-madison.svg' },
  { id: 'd1', seed: 1, group: 'b', name: 'Baylor', logo: 'baylor.svg' },
  { id: 'd2', seed: 2, group: 'b', name: 'Ohio State', logo: 'ohio-st.svg' },
  { id: 'd3', seed: 3, group: 'b', name: 'Villanova', logo: 'villanova.svg' },
  { id: 'd4', seed: 4, group: 'b', name: 'Purdue', logo: 'purdue.svg' },
  {
    id: 'd5',
    seed: 5,
    group: 'b',
    name: 'Oklahoma State',
    logo: 'oklahoma-st.svg'
  },
  { id: 'd6', seed: 6, group: 'b', name: 'Clemson', logo: 'clemson.svg' },
  { id: 'd7', seed: 7, group: 'b', name: 'Missouri', logo: 'missouri.svg' },
  { id: 'd8', seed: 8, group: 'b', name: 'Rutgers', logo: 'rutgers.svg' },
  { id: 'd9', seed: 9, group: 'b', name: 'Xavier', logo: 'xavier.svg' },
  { id: 'd10', seed: 10, group: 'b', name: 'UNC', logo: 'north-carolina.svg' },
  { id: 'd11', seed: 11, group: 'b', name: 'VCU', logo: 'vcu.svg' },
  {
    id: 'd12',
    seed: 12,
    group: 'b',
    name: 'Western Kentucky',
    logo: 'western-ky.svg'
  },
  { id: 'd13', seed: 13, group: 'b', name: 'Winthrop', logo: 'winthrop.svg' },
  {
    id: 'd14',
    seed: 14,
    group: 'b',
    name: 'Abilene Christian',
    logo: 'abilene-christian.svg'
  },
  { id: 'd15', seed: 15, group: 'b', name: 'UMBC', logo: 'umbc.svg' },
  {
    id: 'd16',
    seed: 16,
    group: 'b',
    name: 'Cleveland State',
    logo: 'cleveland-st.svg'
  }
]

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

const getTeamByGroupSeed = (group: string, seed: number): TeamProps => {
  return seeds.find((s) => s.group === group && s.seed === seed)
}

const getTeamById = (id: string): TeamProps => {
  return seeds.find((s) => s.id === id)
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

export { getTeamByGroupSeed, getTeamById, getMatchesByRound }
export type { TeamProps, MatchParams }
