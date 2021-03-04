import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Event {
  NFLTWENTYONE = "NFLTWENTYONE",
  NCAATWENTYONE = "NCAATWENTYONE"
}

export enum Team {
  ARI = "ARI",
  ATL = "ATL",
  BAL = "BAL",
  BUF = "BUF",
  CAR = "CAR",
  CHI = "CHI",
  CIN = "CIN",
  CLE = "CLE",
  DAL = "DAL",
  DEN = "DEN",
  DET = "DET",
  GB = "GB",
  HOU = "HOU",
  IND = "IND",
  JAX = "JAX",
  KC = "KC",
  LAC = "LAC",
  LAR = "LAR",
  LV = "LV",
  MIA = "MIA",
  MIN = "MIN",
  NE = "NE",
  NO = "NO",
  NYG = "NYG",
  NYJ = "NYJ",
  PHI = "PHI",
  PIT = "PIT",
  SEA = "SEA",
  SF = "SF",
  TB = "TB",
  TEN = "TEN",
  WAS = "WAS"
}



export declare class Bracket {
  readonly id: string;
  readonly picks?: string;
  readonly event?: Event | keyof typeof Event;
  readonly username: string;
  readonly owner?: string;
  constructor(init: ModelInit<Bracket>);
  static copyOf(source: Bracket, mutator: (draft: MutableModel<Bracket>) => MutableModel<Bracket> | void): Bracket;
}

export declare class Leaderboard {
  readonly id: string;
  readonly username?: string;
  readonly points?: string;
  constructor(init: ModelInit<Leaderboard>);
  static copyOf(source: Leaderboard, mutator: (draft: MutableModel<Leaderboard>) => MutableModel<Leaderboard> | void): Leaderboard;
}

export declare class Entry {
  readonly id: string;
  readonly username: string;
  readonly superBowl?: Team | keyof typeof Team;
  readonly tieBreaker?: number;
  readonly afcConference?: Team | keyof typeof Team;
  readonly nfcConference?: Team | keyof typeof Team;
  readonly afcDivisional1?: Team | keyof typeof Team;
  readonly afcDivisional2?: Team | keyof typeof Team;
  readonly nfcDivisional1?: Team | keyof typeof Team;
  readonly nfcDivisional2?: Team | keyof typeof Team;
  readonly afcWildCard1?: Team | keyof typeof Team;
  readonly afcWildCard2?: Team | keyof typeof Team;
  readonly afcWildCard3?: Team | keyof typeof Team;
  readonly nfcWildCard1?: Team | keyof typeof Team;
  readonly nfcWildCard2?: Team | keyof typeof Team;
  readonly nfcWildCard3?: Team | keyof typeof Team;
  readonly owner?: string;
  constructor(init: ModelInit<Entry>);
  static copyOf(source: Entry, mutator: (draft: MutableModel<Entry>) => MutableModel<Entry> | void): Entry;
}