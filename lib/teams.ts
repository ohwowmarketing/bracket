export interface TeamParams {
  id: string
  seed: number
  conference: string
  city: string
  name: string
  logo: string
}

interface SeedParams {
  afc1: string
  afc2: string
  afc3: string
  afc4: string
  afc5: string
  afc6: string
  afc7: string
  nfc1: string
  nfc2: string
  nfc3: string
  nfc4: string
  nfc5: string
  nfc6: string
  nfc7: string
}

export const teams: TeamParams[] = [
  {
    id: 'BAL',
    seed: 5,
    conference: 'afc',
    city: 'Baltimore',
    name: 'Ravens',
    logo: '/logos/bal.svg'
  },
  { id: 'BUF', seed: 2, conference: 'afc', city: 'Buffalo', name: 'Bills', logo: '/logos/buf.svg' },
  { id: 'CHI', seed: 7, conference: 'nfc', city: 'Chicago', name: 'Bears', logo: '/logos/chi.svg' },
  {
    id: 'CLE',
    seed: 6,
    conference: 'afc',
    city: 'Cleveland',
    name: 'Browns',
    logo: '/logos/cle.svg'
  },
  {
    id: 'GB',
    seed: 1,
    conference: 'nfc',
    city: 'Green Bay',
    name: 'Packers',
    logo: '/logos/gb.svg'
  },
  {
    id: 'IND',
    seed: 7,
    conference: 'afc',
    city: 'Indianapolis',
    name: 'Colts',
    logo: '/logos/ind.svg'
  },
  {
    id: 'KC',
    seed: 1,
    conference: 'afc',
    city: 'Kansas City',
    name: 'Chiefs',
    logo: '/logos/kc.svg'
  },
  {
    id: 'LAR',
    seed: 6,
    conference: 'nfc',
    city: 'Los Angeles',
    name: 'Rams',
    logo: '/logos/lar.svg'
  },
  {
    id: 'NO',
    seed: 2,
    conference: 'nfc',
    city: 'New Orleans',
    name: 'Saints',
    logo: '/logos/no.svg'
  },
  {
    id: 'PIT',
    seed: 3,
    conference: 'afc',
    city: 'Pittsburgh',
    name: 'Steelers',
    logo: '/logos/pit.svg'
  },
  {
    id: 'SEA',
    seed: 3,
    conference: 'nfc',
    city: 'Seattle',
    name: 'Seahawks',
    logo: '/logos/sea.svg'
  },
  {
    id: 'TB',
    seed: 5,
    conference: 'nfc',
    city: 'Tampa Bay',
    name: 'Buccaneers',
    logo: '/logos/tb.svg'
  },
  {
    id: 'TEN',
    seed: 4,
    conference: 'afc',
    city: 'Tennessee',
    name: 'Titans',
    logo: '/logos/ten.svg'
  },
  {
    id: 'WAS',
    seed: 4,
    conference: 'nfc',
    city: 'Washington',
    name: 'Football Team',
    logo: '/logos/was.jpg'
  }
]

export const seeds: SeedParams = {
  afc1: 'KC',
  afc2: 'BUF',
  afc3: 'PIT',
  afc4: 'TEN',
  afc5: 'BAL',
  afc6: 'CLE',
  afc7: 'IND',
  nfc1: 'GB',
  nfc2: 'NO',
  nfc3: 'SEA',
  nfc4: 'WAS',
  nfc5: 'TB',
  nfc6: 'LAR',
  nfc7: 'CHI'
}

export const teamById = (id: string) => teams.find(team => team.id === id)
export const teamByConferenceSeed = (conference, seed) => seeds[`${conference}${seed}`]
