/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLeaderboard = /* GraphQL */ `
  mutation CreateLeaderboard(
    $input: CreateLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    createLeaderboard(input: $input, condition: $condition) {
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
export const updateLeaderboard = /* GraphQL */ `
  mutation UpdateLeaderboard(
    $input: UpdateLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    updateLeaderboard(input: $input, condition: $condition) {
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
export const deleteLeaderboard = /* GraphQL */ `
  mutation DeleteLeaderboard(
    $input: DeleteLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    deleteLeaderboard(input: $input, condition: $condition) {
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
export const createOfficialResult = /* GraphQL */ `
  mutation CreateOfficialResult(
    $input: CreateOfficialResultInput!
    $condition: ModelOfficialResultConditionInput
  ) {
    createOfficialResult(input: $input, condition: $condition) {
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
export const updateOfficialResult = /* GraphQL */ `
  mutation UpdateOfficialResult(
    $input: UpdateOfficialResultInput!
    $condition: ModelOfficialResultConditionInput
  ) {
    updateOfficialResult(input: $input, condition: $condition) {
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
export const deleteOfficialResult = /* GraphQL */ `
  mutation DeleteOfficialResult(
    $input: DeleteOfficialResultInput!
    $condition: ModelOfficialResultConditionInput
  ) {
    deleteOfficialResult(input: $input, condition: $condition) {
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
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
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
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
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
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
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
