// tslint:disable
// this is an auto generated file. This will be overwritten

export const getResult = `query GetResult($id: ID!) {
  getResult(id: $id) {
    id
    superBowl
    tieBreaker
    afcConference
    nfcConference
    afcDivisional1
    afcDivisional2
    nfcDivisional1
    nfcDivisional2
    afcWildCard1
    afcWildCard2
    afcWildCard3
    nfcWildCard1
    nfcWildCard2
    nfcWildCard3
    _version
    _deleted
    _lastChangedAt
    createdAt
    updatedAt
  }
}
`;
export const listResults = `query ListResults(
  $filter: ModelResultFilterInput
  $limit: Int
  $nextToken: String
) {
  listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      superBowl
      tieBreaker
      afcConference
      nfcConference
      afcDivisional1
      afcDivisional2
      nfcDivisional1
      nfcDivisional2
      afcWildCard1
      afcWildCard2
      afcWildCard3
      nfcWildCard1
      nfcWildCard2
      nfcWildCard3
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
    nextToken
    startedAt
  }
}
`;
export const syncResults = `query SyncResults(
  $filter: ModelResultFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncResults(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      superBowl
      tieBreaker
      afcConference
      nfcConference
      afcDivisional1
      afcDivisional2
      nfcDivisional1
      nfcDivisional2
      afcWildCard1
      afcWildCard2
      afcWildCard3
      nfcWildCard1
      nfcWildCard2
      nfcWildCard3
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
    nextToken
    startedAt
  }
}
`;
export const getEntry = `query GetEntry($id: ID!) {
  getEntry(id: $id) {
    id
    username
    superBowl
    tieBreaker
    afcConference
    nfcConference
    afcDivisional1
    afcDivisional2
    nfcDivisional1
    nfcDivisional2
    afcWildCard1
    afcWildCard2
    afcWildCard3
    nfcWildCard1
    nfcWildCard2
    nfcWildCard3
    owner
    _version
    _deleted
    _lastChangedAt
    createdAt
    updatedAt
  }
}
`;
export const listEntrys = `query ListEntrys(
  $filter: ModelEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      superBowl
      tieBreaker
      afcConference
      nfcConference
      afcDivisional1
      afcDivisional2
      nfcDivisional1
      nfcDivisional2
      afcWildCard1
      afcWildCard2
      afcWildCard3
      nfcWildCard1
      nfcWildCard2
      nfcWildCard3
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
    nextToken
    startedAt
  }
}
`;
export const syncEntries = `query SyncEntries(
  $filter: ModelEntryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      username
      superBowl
      tieBreaker
      afcConference
      nfcConference
      afcDivisional1
      afcDivisional2
      nfcDivisional1
      nfcDivisional2
      afcWildCard1
      afcWildCard2
      afcWildCard3
      nfcWildCard1
      nfcWildCard2
      nfcWildCard3
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
    nextToken
    startedAt
  }
}
`;
