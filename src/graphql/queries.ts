/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeaderboard = /* GraphQL */ `
  query GetLeaderboard($id: ID!) {
    getLeaderboard(id: $id) {
      id
      username
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listLeaderboards = /* GraphQL */ `
  query ListLeaderboards(
    $filter: ModelLeaderboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaderboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        points
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
export const syncLeaderboards = /* GraphQL */ `
  query SyncLeaderboards(
    $filter: ModelLeaderboardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLeaderboards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        points
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
export const getOfficialResult = /* GraphQL */ `
  query GetOfficialResult($id: ID!) {
    getOfficialResult(id: $id) {
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
export const listOfficialResults = /* GraphQL */ `
  query ListOfficialResults(
    $filter: ModelOfficialResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfficialResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncOfficialResults = /* GraphQL */ `
  query SyncOfficialResults(
    $filter: ModelOfficialResultFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOfficialResults(
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
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
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
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
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
export const entryByUsername = /* GraphQL */ `
  query EntryByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entryByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
export const syncEntries = /* GraphQL */ `
  query SyncEntries(
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
