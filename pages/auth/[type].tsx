import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Auth, Hub } from 'aws-amplify'
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  RequireNewPassword
} from 'aws-amplify-react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import theme from '@mui/theme'
import { MD } from '@mui/Layout'
import State from '@components/State'

const authTheme = {
  a: {
    color: theme.palette.primary.main
  },
  container: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  formContainer: {
    textAlign: 'center'
  },
  formSection: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    borderRadius: `${theme.shape.borderRadius}px`,
    textAlign: 'left'
  },
  sectionFooter: {
    linkColor: theme.palette.primary.main
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: `${theme.shape.borderRadius}px`,
    fontFamily: theme.typography.fontFamily
  }
}

const Page = () => {
  const router = useRouter()
  const { type } = router.query
  const [authState, setAuthState] = useState<string>(null)
  const [user, setUser] = useState<any>(null)
  const [showState, setShowState] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleAuthStateChange = stateChange => {
    console.log('handleAuthStateChange', stateChange)
    // 1. signIn 2. signedUp
    setAuthState(stateChange)
  }

  useEffect(() => {
    const initAuth = async () => {
      if (type === 'signup') {
        setAuthState('signUp')
      } else if (type === 'forgot') {
        setAuthState('forgotPassword')
      } else if (type === 'password') {
        setAuthState('requireNewPassword')
      } else if (type === 'signout') {
        router.push('/')
      } else {
        setAuthState('signIn')
      }
    }
    const signOutFirst = async () => {
      await Auth.signOut()
    }
    if (type) {
      signOutFirst()
      initAuth()
    }
  }, [type])

  useEffect(() => {
    const checkUser = async () => {
      try {
        const signedInUser = await Auth.currentAuthenticatedUser()
        setUser(signedInUser)
      } catch (err) {
        setUser(null)
      }
    }
    checkUser()
  }, [])

  useEffect(() => {
    const checkState = () => {
      if (
        user.attributes &&
        user.attributes['custom:state'] &&
        user.attributes['custom:state'].length === 2
      ) {
        router.push('/entry')
      } else {
        setShowState(true)
      }
    }
    if (user !== null) {
      checkState()
    }
  }, [user])

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', async ({ payload: { event, data } }) => {
      switch (event) {
        case 'signUp_failure':
          setErrorMessage(data.message)
          break
        case 'signIn_failure':
          setErrorMessage(data.message)
          break
        case 'signIn':
          const signedInUser = await Auth.currentAuthenticatedUser()
          setUser(signedInUser)
          break
        case 'configured':
        case 'signUp':
        case 'signOut':
          break
        default:
          break
      }
      return () => unsubscribe()
    })
  }, [])

  const handleCloseSnackbar = () => {
    setErrorMessage('')
  }

  if (!authState) {
    return (
      <MD align='center'>
        <CircularProgress color='secondary' />
      </MD>
    )
  }

  // const map = message => {
  //   if (/incorrect.*username.*password/i.test(message)) {
  //     return 'Incorrect username or password'
  //   }
  //   return message
  // }

  return (
    <MD>
      {showState ? (
        <State />
      ) : (
        <>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={errorMessage.length > 0}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity='warning'>
              {errorMessage}
            </Alert>
          </Snackbar>
          <Authenticator
            theme={authTheme}
            hideDefault={true}
            onStateChange={handleAuthStateChange}
            authState={authState}>
            <SignIn />
            <SignUp signUpConfig={{ hiddenDefaults: ['phone_number'] }} />
            <ConfirmSignUp />
            <ForgotPassword />
            <RequireNewPassword />
          </Authenticator>
        </>
      )}
    </MD>
  )
}

export default Page
