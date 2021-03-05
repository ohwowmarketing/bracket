/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBracketInput = {
  id?: string | null,
  picks?: string | null,
  event?: Event | null,
  username: string,
  owner?: string | null,
  _version?: number | null,
};

export enum Event {
  NFLTWENTYONE = "NFLTWENTYONE",
  NCAATWENTYONE = "NCAATWENTYONE",
}


export type ModelBracketConditionInput = {
  picks?: ModelStringInput | null,
  event?: ModelEventInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelBracketConditionInput | null > | null,
  or?: Array< ModelBracketConditionInput | null > | null,
  not?: ModelBracketConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelEventInput = {
  eq?: Event | null,
  ne?: Event | null,
};

export type UpdateBracketInput = {
  id: string,
  picks?: string | null,
  event?: Event | null,
  username?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteBracketInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateLeaderboardInput = {
  id?: string | null,
  username?: string | null,
  points?: string | null,
  _version?: number | null,
};

export type ModelLeaderboardConditionInput = {
  username?: ModelStringInput | null,
  points?: ModelStringInput | null,
  and?: Array< ModelLeaderboardConditionInput | null > | null,
  or?: Array< ModelLeaderboardConditionInput | null > | null,
  not?: ModelLeaderboardConditionInput | null,
};

export type UpdateLeaderboardInput = {
  id: string,
  username?: string | null,
  points?: string | null,
  _version?: number | null,
};

export type DeleteLeaderboardInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateEntryInput = {
  id?: string | null,
  username: string,
  superBowl?: Team | null,
  tieBreaker?: number | null,
  afcConference?: Team | null,
  nfcConference?: Team | null,
  afcDivisional1?: Team | null,
  afcDivisional2?: Team | null,
  nfcDivisional1?: Team | null,
  nfcDivisional2?: Team | null,
  afcWildCard1?: Team | null,
  afcWildCard2?: Team | null,
  afcWildCard3?: Team | null,
  nfcWildCard1?: Team | null,
  nfcWildCard2?: Team | null,
  nfcWildCard3?: Team | null,
  owner?: string | null,
  _version?: number | null,
};

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
  WAS = "WAS",
}


export type ModelEntryConditionInput = {
  username?: ModelStringInput | null,
  superBowl?: ModelTeamInput | null,
  tieBreaker?: ModelIntInput | null,
  afcConference?: ModelTeamInput | null,
  nfcConference?: ModelTeamInput | null,
  afcDivisional1?: ModelTeamInput | null,
  afcDivisional2?: ModelTeamInput | null,
  nfcDivisional1?: ModelTeamInput | null,
  nfcDivisional2?: ModelTeamInput | null,
  afcWildCard1?: ModelTeamInput | null,
  afcWildCard2?: ModelTeamInput | null,
  afcWildCard3?: ModelTeamInput | null,
  nfcWildCard1?: ModelTeamInput | null,
  nfcWildCard2?: ModelTeamInput | null,
  nfcWildCard3?: ModelTeamInput | null,
  and?: Array< ModelEntryConditionInput | null > | null,
  or?: Array< ModelEntryConditionInput | null > | null,
  not?: ModelEntryConditionInput | null,
};

export type ModelTeamInput = {
  eq?: Team | null,
  ne?: Team | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEntryInput = {
  id: string,
  username?: string | null,
  superBowl?: Team | null,
  tieBreaker?: number | null,
  afcConference?: Team | null,
  nfcConference?: Team | null,
  afcDivisional1?: Team | null,
  afcDivisional2?: Team | null,
  nfcDivisional1?: Team | null,
  nfcDivisional2?: Team | null,
  afcWildCard1?: Team | null,
  afcWildCard2?: Team | null,
  afcWildCard3?: Team | null,
  nfcWildCard1?: Team | null,
  nfcWildCard2?: Team | null,
  nfcWildCard3?: Team | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteEntryInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelBracketFilterInput = {
  id?: ModelIDInput | null,
  picks?: ModelStringInput | null,
  event?: ModelEventInput | null,
  username?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBracketFilterInput | null > | null,
  or?: Array< ModelBracketFilterInput | null > | null,
  not?: ModelBracketFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelLeaderboardFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  points?: ModelStringInput | null,
  and?: Array< ModelLeaderboardFilterInput | null > | null,
  or?: Array< ModelLeaderboardFilterInput | null > | null,
  not?: ModelLeaderboardFilterInput | null,
};

export type ModelEntryFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  superBowl?: ModelTeamInput | null,
  tieBreaker?: ModelIntInput | null,
  afcConference?: ModelTeamInput | null,
  nfcConference?: ModelTeamInput | null,
  afcDivisional1?: ModelTeamInput | null,
  afcDivisional2?: ModelTeamInput | null,
  nfcDivisional1?: ModelTeamInput | null,
  nfcDivisional2?: ModelTeamInput | null,
  afcWildCard1?: ModelTeamInput | null,
  afcWildCard2?: ModelTeamInput | null,
  afcWildCard3?: ModelTeamInput | null,
  nfcWildCard1?: ModelTeamInput | null,
  nfcWildCard2?: ModelTeamInput | null,
  nfcWildCard3?: ModelTeamInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEntryFilterInput | null > | null,
  or?: Array< ModelEntryFilterInput | null > | null,
  not?: ModelEntryFilterInput | null,
};

export type CreateBracketMutationVariables = {
  input: CreateBracketInput,
  condition?: ModelBracketConditionInput | null,
};

export type CreateBracketMutation = {
  createBracket:  {
    __typename: "Bracket",
    id: string,
    picks: string | null,
    event: Event | null,
    username: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBracketMutationVariables = {
  input: UpdateBracketInput,
  condition?: ModelBracketConditionInput | null,
};

export type UpdateBracketMutation = {
  updateBracket:  {
    __typename: "Bracket",
    id: string,
    picks: string | null,
    event: Event | null,
    username: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBracketMutationVariables = {
  input: DeleteBracketInput,
  condition?: ModelBracketConditionInput | null,
};

export type DeleteBracketMutation = {
  deleteBracket:  {
    __typename: "Bracket",
    id: string,
    picks: string | null,
    event: Event | null,
    username: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLeaderboardMutationVariables = {
  input: CreateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type CreateLeaderboardMutation = {
  createLeaderboard:  {
    __typename: "Leaderboard",
    id: string,
    username: string | null,
    points: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLeaderboardMutationVariables = {
  input: UpdateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type UpdateLeaderboardMutation = {
  updateLeaderboard:  {
    __typename: "Leaderboard",
    id: string,
    username: string | null,
    points: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLeaderboardMutationVariables = {
  input: DeleteLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type DeleteLeaderboardMutation = {
  deleteLeaderboard:  {
    __typename: "Leaderboard",
    id: string,
    username: string | null,
    points: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEntryMutationVariables = {
  input: CreateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type CreateEntryMutation = {
  createEntry:  {
    __typename: "Entry",
    id: string,
    username: string,
    superBowl: Team | null,
    tieBreaker: number | null,
    afcConference: Team | null,
    nfcConference: Team | null,
    afcDivisional1: Team | null,
    afcDivisional2: Team | null,
    nfcDivisional1: Team | null,
    nfcDivisional2: Team | null,
    afcWildCard1: Team | null,
    afcWildCard2: Team | null,
    afcWildCard3: Team | null,
    nfcWildCard1: Team | null,
    nfcWildCard2: Team | null,
    nfcWildCard3: Team | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEntryMutationVariables = {
  input: UpdateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type UpdateEntryMutation = {
  updateEntry:  {
    __typename: "Entry",
    id: string,
    username: string,
    superBowl: Team | null,
    tieBreaker: number | null,
    afcConference: Team | null,
    nfcConference: Team | null,
    afcDivisional1: Team | null,
    afcDivisional2: Team | null,
    nfcDivisional1: Team | null,
    nfcDivisional2: Team | null,
    afcWildCard1: Team | null,
    afcWildCard2: Team | null,
    afcWildCard3: Team | null,
    nfcWildCard1: Team | null,
    nfcWildCard2: Team | null,
    nfcWildCard3: Team | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEntryMutationVariables = {
  input: DeleteEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type DeleteEntryMutation = {
  deleteEntry:  {
    __typename: "Entry",
    id: string,
    username: string,
    superBowl: Team | null,
    tieBreaker: number | null,
    afcConference: Team | null,
    nfcConference: Team | null,
    afcDivisional1: Team | null,
    afcDivisional2: Team | null,
    nfcDivisional1: Team | null,
    nfcDivisional2: Team | null,
    afcWildCard1: Team | null,
    afcWildCard2: Team | null,
    afcWildCard3: Team | null,
    nfcWildCard1: Team | null,
    nfcWildCard2: Team | null,
    nfcWildCard3: Team | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBracketQueryVariables = {
  id: string,
};

export type GetBracketQuery = {
  getBracket:  {
    __typename: "Bracket",
    id: string,
    picks: string | null,
    event: Event | null,
    username: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBracketsQueryVariables = {
  filter?: ModelBracketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBracketsQuery = {
  listBrackets:  {
    __typename: "ModelBracketConnection",
    items:  Array< {
      __typename: "Bracket",
      id: string,
      picks: string | null,
      event: Event | null,
      username: string,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type BracketByUsernameQueryVariables = {
  username?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBracketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BracketByUsernameQuery = {
  bracketByUsername:  {
    __typename: "ModelBracketConnection",
    items:  Array< {
      __typename: "Bracket",
      id: string,
      picks: string | null,
      event: Event | null,
      username: string,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type BracketByUsernameEventQueryVariables = {
  username?: string | null,
  event?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBracketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BracketByUsernameEventQuery = {
  bracketByUsernameEvent:  {
    __typename: "ModelBracketConnection",
    items:  Array< {
      __typename: "Bracket",
      id: string,
      picks: string | null,
      event: Event | null,
      username: string,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncBracketsQueryVariables = {
  filter?: ModelBracketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBracketsQuery = {
  syncBrackets:  {
    __typename: "ModelBracketConnection",
    items:  Array< {
      __typename: "Bracket",
      id: string,
      picks: string | null,
      event: Event | null,
      username: string,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetLeaderboardQueryVariables = {
  id: string,
};

export type GetLeaderboardQuery = {
  getLeaderboard:  {
    __typename: "Leaderboard",
    id: string,
    username: string | null,
    points: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLeaderboardsQueryVariables = {
  filter?: ModelLeaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaderboardsQuery = {
  listLeaderboards:  {
    __typename: "ModelLeaderboardConnection",
    items:  Array< {
      __typename: "Leaderboard",
      id: string,
      username: string | null,
      points: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type LeaderByUsernameQueryVariables = {
  username?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLeaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LeaderByUsernameQuery = {
  leaderByUsername:  {
    __typename: "ModelLeaderboardConnection",
    items:  Array< {
      __typename: "Leaderboard",
      id: string,
      username: string | null,
      points: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncLeaderboardsQueryVariables = {
  filter?: ModelLeaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLeaderboardsQuery = {
  syncLeaderboards:  {
    __typename: "ModelLeaderboardConnection",
    items:  Array< {
      __typename: "Leaderboard",
      id: string,
      username: string | null,
      points: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetEntryQueryVariables = {
  id: string,
};

export type GetEntryQuery = {
  getEntry:  {
    __typename: "Entry",
    id: string,
    username: string,
    superBowl: Team | null,
    tieBreaker: number | null,
    afcConference: Team | null,
    nfcConference: Team | null,
    afcDivisional1: Team | null,
    afcDivisional2: Team | null,
    nfcDivisional1: Team | null,
    nfcDivisional2: Team | null,
    afcWildCard1: Team | null,
    afcWildCard2: Team | null,
    afcWildCard3: Team | null,
    nfcWildCard1: Team | null,
    nfcWildCard2: Team | null,
    nfcWildCard3: Team | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEntrysQueryVariables = {
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEntrysQuery = {
  listEntrys:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      id: string,
      username: string,
      superBowl: Team | null,
      tieBreaker: number | null,
      afcConference: Team | null,
      nfcConference: Team | null,
      afcDivisional1: Team | null,
      afcDivisional2: Team | null,
      nfcDivisional1: Team | null,
      nfcDivisional2: Team | null,
      afcWildCard1: Team | null,
      afcWildCard2: Team | null,
      afcWildCard3: Team | null,
      nfcWildCard1: Team | null,
      nfcWildCard2: Team | null,
      nfcWildCard3: Team | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type EntryByUsernameQueryVariables = {
  username?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EntryByUsernameQuery = {
  entryByUsername:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      id: string,
      username: string,
      superBowl: Team | null,
      tieBreaker: number | null,
      afcConference: Team | null,
      nfcConference: Team | null,
      afcDivisional1: Team | null,
      afcDivisional2: Team | null,
      nfcDivisional1: Team | null,
      nfcDivisional2: Team | null,
      afcWildCard1: Team | null,
      afcWildCard2: Team | null,
      afcWildCard3: Team | null,
      nfcWildCard1: Team | null,
      nfcWildCard2: Team | null,
      nfcWildCard3: Team | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncEntriesQueryVariables = {
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEntriesQuery = {
  syncEntries:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      id: string,
      username: string,
      superBowl: Team | null,
      tieBreaker: number | null,
      afcConference: Team | null,
      nfcConference: Team | null,
      afcDivisional1: Team | null,
      afcDivisional2: Team | null,
      nfcDivisional1: Team | null,
      nfcDivisional2: Team | null,
      afcWildCard1: Team | null,
      afcWildCard2: Team | null,
      afcWildCard3: Team | null,
      nfcWildCard1: Team | null,
      nfcWildCard2: Team | null,
      nfcWildCard3: Team | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateBracketSubscription = {
  onCreateBracket:  {
    __typename: "Bracket",
    id: string,
    picks: string | null,
    event: Event | null,
    username: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBracketSubscription = {
  onUpdateBracket:  {
    __typename: "Bracket",
    id: string,
    picks: string | null,
    event: Event | null,
    username: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBracketSubscription = {
  onDeleteBracket:  {
    __typename: "Bracket",
    id: string,
    picks: string | null,
    event: Event | null,
    username: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLeaderboardSubscription = {
  onCreateLeaderboard:  {
    __typename: "Leaderboard",
    id: string,
    username: string | null,
    points: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLeaderboardSubscription = {
  onUpdateLeaderboard:  {
    __typename: "Leaderboard",
    id: string,
    username: string | null,
    points: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLeaderboardSubscription = {
  onDeleteLeaderboard:  {
    __typename: "Leaderboard",
    id: string,
    username: string | null,
    points: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEntrySubscription = {
  onCreateEntry:  {
    __typename: "Entry",
    id: string,
    username: string,
    superBowl: Team | null,
    tieBreaker: number | null,
    afcConference: Team | null,
    nfcConference: Team | null,
    afcDivisional1: Team | null,
    afcDivisional2: Team | null,
    nfcDivisional1: Team | null,
    nfcDivisional2: Team | null,
    afcWildCard1: Team | null,
    afcWildCard2: Team | null,
    afcWildCard3: Team | null,
    nfcWildCard1: Team | null,
    nfcWildCard2: Team | null,
    nfcWildCard3: Team | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEntrySubscription = {
  onUpdateEntry:  {
    __typename: "Entry",
    id: string,
    username: string,
    superBowl: Team | null,
    tieBreaker: number | null,
    afcConference: Team | null,
    nfcConference: Team | null,
    afcDivisional1: Team | null,
    afcDivisional2: Team | null,
    nfcDivisional1: Team | null,
    nfcDivisional2: Team | null,
    afcWildCard1: Team | null,
    afcWildCard2: Team | null,
    afcWildCard3: Team | null,
    nfcWildCard1: Team | null,
    nfcWildCard2: Team | null,
    nfcWildCard3: Team | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEntrySubscription = {
  onDeleteEntry:  {
    __typename: "Entry",
    id: string,
    username: string,
    superBowl: Team | null,
    tieBreaker: number | null,
    afcConference: Team | null,
    nfcConference: Team | null,
    afcDivisional1: Team | null,
    afcDivisional2: Team | null,
    nfcDivisional1: Team | null,
    nfcDivisional2: Team | null,
    afcWildCard1: Team | null,
    afcWildCard2: Team | null,
    afcWildCard3: Team | null,
    nfcWildCard1: Team | null,
    nfcWildCard2: Team | null,
    nfcWildCard3: Team | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
