import { useReducer, useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'

const amplifyAuthReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'FETCH_USER_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.user
      }
    case 'FETCH_USER_DATA_FAILURE':
      return { ...state, isLoading: false, isError: true }
    case 'RESET_USER_DATA':
      return { ...state, user: null }
    case 'ERROR_MESSAGE':
      return { ...state, isError: true, errroMessage: action.payload.errorMessage }
    default:
      throw new Error()
  }
}

const useAmplifyAuth = () => {
  const initialState = {
    isLoading: true,
    isError: false,
    user: null,
    errorMessage: ''
  }
  const [state, dispatch] = useReducer(amplifyAuthReducer, initialState)
  const [triggerFetch, setTriggerFetch] = useState(false)

  useEffect(() => {
    let isMounted = true

    const fetchUserData = async () => {
      if (isMounted) {
        dispatch({ type: 'FETCH_USER_DATA_INIT' })
      }
      try {
        if (isMounted) {
          const data = await Auth.currentAuthenticatedUser()
          if (data) {
            dispatch({
              type: 'FETCH_USER_DATA_SUCCESS',
              payload: { user: data }
            })
          }
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: 'FETCH_USER_DATA_FAILURE' })
        }
      }
    }

    const HubListener = () => {
      Hub.listen('auth', data => {
        const { payload } = data
        onAuthEvent(payload)
      })
    }

    const onAuthEvent = payload => {
      switch (payload.event) {
        case 'signIn':
          if (isMounted) {
            setTriggerFetch(true)
          }
          break
        case 'signUp_failure':
          dispatch({ type: 'ERROR_MESSAGE', payload: { errorMessage: payload.data.message } })
          break
        case 'signIn_failure':
          dispatch({ type: 'ERROR_MESSAGE', payload: { errorMessage: payload.data.message } })
          break
        default:
          return
      }
    }

    HubListener()
    fetchUserData()

    return () => {
      Hub.remove('auth', null)
      isMounted = false
    }
  }, [triggerFetch])

  const handleSignOut = async () => {
    try {
      await Auth.signOut()
      setTriggerFetch(false)
      dispatch({ type: 'RESET_USER_DATA' })
    } catch (error) {
      console.error('Error signing out user ', error)
    }
  }

  return { state, handleSignOut }
}

export default useAmplifyAuth
