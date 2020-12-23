import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

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

export declare class Result {
  readonly id: string;
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
  constructor(init: ModelInit<Result>);
  static copyOf(source: Result, mutator: (draft: MutableModel<Result>) => MutableModel<Result> | void): Result;
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