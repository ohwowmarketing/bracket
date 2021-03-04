// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Event = {
  "NFLTWENTYONE": "NFLTWENTYONE",
  "NCAATWENTYONE": "NCAATWENTYONE"
};

const Team = {
  "ARI": "ARI",
  "ATL": "ATL",
  "BAL": "BAL",
  "BUF": "BUF",
  "CAR": "CAR",
  "CHI": "CHI",
  "CIN": "CIN",
  "CLE": "CLE",
  "DAL": "DAL",
  "DEN": "DEN",
  "DET": "DET",
  "GB": "GB",
  "HOU": "HOU",
  "IND": "IND",
  "JAX": "JAX",
  "KC": "KC",
  "LAC": "LAC",
  "LAR": "LAR",
  "LV": "LV",
  "MIA": "MIA",
  "MIN": "MIN",
  "NE": "NE",
  "NO": "NO",
  "NYG": "NYG",
  "NYJ": "NYJ",
  "PHI": "PHI",
  "PIT": "PIT",
  "SEA": "SEA",
  "SF": "SF",
  "TB": "TB",
  "TEN": "TEN",
  "WAS": "WAS"
};

const { Bracket, Leaderboard, Entry } = initSchema(schema);

export {
  Bracket,
  Leaderboard,
  Entry,
  Event,
  Team
};