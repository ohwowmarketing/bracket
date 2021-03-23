import { useMemo } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

export interface StateProps {
  locked: boolean
  results: any
  bracketId: string
  version: number
  picks: any
  tieBreaker: number
  first: number
  second: number
  sweet16: number
  elite8: number
  final4: number
  championship: number
}

const initialState = {
  locked: true,
  results: {},
  bracketId: '',
  version: 0,
  picks: {},
  tieBreaker: 0,
  first: 0,
  second: 0,
  sweet16: 0,
  elite8: 0,
  final4: 0,
  championship: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOCK':
      return {
        ...state,
        locked: !state.locked
      }
    case 'PICK':
      return {
        ...state,
        picks: { ...state.picks, [action.game]: action.team }
      }
    case 'IMPORT':
      return {
        ...state,
        bracketId: action.bracketId,
        picks: action.picks,
        tieBreaker: action.tieBreaker,
        version: action.version
      }
    case 'TIEBREAKER':
      return {
        ...state,
        tieBreaker: action.tieBreaker
      }
    case 'RESULTS':
      return {
        ...state,
        results: action.results
      }
    case 'SAVE':
      return {
        ...state,
        bracketId: action.bracketId,
        version: 1
      }
    case 'UPDATE':
      return {
        ...state,
        version: action.version
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()))
}

export const initializeStore = preloadedState => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
