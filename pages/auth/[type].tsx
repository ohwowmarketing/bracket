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
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import theme from '@mui/theme'
import { MD } from '@mui/Layout'
import Loading from '@components/Loading'

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
  const [loading, setLoading] = useState<boolean>(true)
  const [authState, setAuthState] = useState<string>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleAuthStateChange = stateChange => {
    console.log('handleAuthStateChange', stateChange)
    // 1. signIn 2. signedUp
    setAuthState(stateChange)
  }

  useEffect(() => {
    const initAuth = async () => {
      // await Auth.signOut({ global: true })
      if (type === 'signup') {
        setAuthState('signUp')
      } else if (type === 'forgot') {
        setAuthState('forgotPassword')
      } else if (type === 'password') {
        setAuthState('requireNewPassword')
      } else if (type === 'signout') {
        router.push('/')
      } else if (type === 'signin') {
        setAuthState('signIn')
      }
    }
    if (type) {
      initAuth()
    }
  }, [type])

  useEffect(() => {
    const checkUser = async () => {
      try {
        console.log('checking if signed in...')
        const signedInUser = await Auth.currentAuthenticatedUser()
        console.log('done checking')
        if (signedInUser) {
          console.log('signed in')
          router.push('/auth/enter')
        } else {
          console.log('not signed in')
          setLoading(false)
        }
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    checkUser()
  }, [])

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', async ({ payload: { event, data } }) => {
      console.log(`Hub event '${event}' in /auth/[type] with data`, data)
      switch (event) {
        case 'signUp_failure':
          setErrorMessage(data.message)
          break
        case 'signIn_failure':
          setErrorMessage(data.message)
          break
        case 'signIn':
          // const signedInUser = await Auth.currentAuthenticatedUser()
          // setUser(signedInUser)
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

  return (
    <>
      {loading || !authState ? (
        <Loading />
      ) : (
        <MD>
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
        </MD>
      )}
    </>
  )
}

export default Page
