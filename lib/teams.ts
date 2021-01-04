export interface TeamParams {
  id: string
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
  { id: 'ARI', city: 'Arizona', name: 'Cardinals', logo: '/logos/ari.svg' },
  { id: 'ATL', city: 'Atlanta', name: 'Falcons', logo: '/logos/atl.svg' },
  { id: 'BAL', city: 'Baltimore', name: 'Ravens', logo: '/logos/bal.svg' },
  { id: 'BUF', city: 'Buffalo', name: 'Bills', logo: '/logos/buf.svg' },
  { id: 'CAR', city: 'Carolina', name: 'Panthers', logo: '/logos/car.svg' },
  { id: 'CHI', city: 'Chicago', name: 'Bears', logo: '/logos/chi.svg' },
  { id: 'CIN', city: 'Cincinnati', name: 'Bengals', logo: '/logos/cin.svg' },
  { id: 'CLE', city: 'Cleveland', name: 'Browns', logo: '/logos/cle.svg' },
  { id: 'DAL', city: 'Dallas', name: 'Cowboys', logo: '/logos/dal.svg' },
  { id: 'DEN', city: 'Denver', name: 'Broncos', logo: '/logos/den.svg' },
  { id: 'DET', city: 'Detroit', name: 'Lions', logo: '/logos/det.svg' },
  { id: 'GB', city: 'Green Bay', name: 'Packers', logo: '/logos/gb.svg' },
  { id: 'HOU', city: 'Houston', name: 'Texans', logo: '/logos/hou.svg' },
  { id: 'IND', city: 'Indianapolis', name: 'Colts', logo: '/logos/ind.svg' },
  { id: 'JAX', city: 'Jacksonville', name: 'Jaguars', logo: '/logos/jax.svg' },
  { id: 'KC', city: 'Kansas City', name: 'Chiefs', logo: '/logos/kc.svg' },
  { id: 'LAC', city: 'Los Angeles', name: 'Chargers', logo: '/logos/lac.svg' },
  { id: 'LAR', city: 'Los Angeles', name: 'Rams', logo: '/logos/lar.svg' },
  { id: 'LV', city: 'Las Vegas', name: 'Raiders', logo: '/logos/lv.svg' },
  { id: 'MIA', city: 'Miami', name: 'Dolphins', logo: '/logos/mia.svg' },
  { id: 'MIN', city: 'Minnesota', name: 'Vikings', logo: '/logos/min.svg' },
  { id: 'NE', city: 'New England', name: 'Patriots', logo: '/logos/ne.svg' },
  { id: 'NO', city: 'New Orleans', name: 'Saints', logo: '/logos/no.svg' },
  { id: 'NYG', city: 'New York', name: 'Giants', logo: '/logos/nyg.svg' },
  { id: 'NYJ', city: 'New York', name: 'Jets', logo: '/logos/nyj.svg' },
  { id: 'PHI', city: 'Philadelphia', name: 'Eagles', logo: '/logos/phi.svg' },
  { id: 'PIT', city: 'Pittsburgh', name: 'Steelers', logo: '/logos/pit.svg' },
  { id: 'SEA', city: 'Seattle', name: 'Seahawks', logo: '/logos/sea.svg' },
  { id: 'SF', city: 'San Francisco', name: '49ers', logo: '/logos/sf.svg' },
  { id: 'TB', city: 'Tampa Bay', name: 'Buccaneers', logo: '/logos/tb.svg' },
  { id: 'TEN', city: 'Tennessee', name: 'Titans', logo: '/logos/ten.svg' },
  { id: 'WAS', city: 'Washington', name: 'Football Team', logo: '/logos/was.jpg' }
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
