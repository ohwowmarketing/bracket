import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Authenticator, SignIn, SignUp, ConfirmSignUp } from 'aws-amplify-react'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import useUser from '@hooks/useUser'
import theme from '@mui/theme'
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

const SignUpPage = () => {
  const router = useRouter()
  const { user, loading } = useUser()
  const [authState, setAuthState] = useState<string>()
  useEffect(() => {
    return onAuthUIStateChange(nextAuthState => {
      console.log('onAuthUIStateChange:', nextAuthState)
      setAuthState(nextAuthState)
    })
  }, [])

  const handleAuthStateChange = stateChange => {
    console.log('handleAuthStateChange', stateChange)
    // 1. signUp 2. confirmSignUp 3. signedUp
    setAuthState(stateChange)
  }

  if (loading) {
    return <CircularProgress color='secondary' />
  }

  if (user && authState === 'signedIn') {
    if (
      user.attributes &&
      user.attributes['custom:state'] &&
      user.attributes['custom:state'].length === 2
    ) {
      router.push('/entry')
    } else {
      return <State />
    }
  }

  if (authState === 'signedUp') {
    router.push('/auth/signin')
  }

  return (
    <Authenticator
      theme={authTheme}
      hideDefault={true}
      onStateChange={handleAuthStateChange}
      authState='signUp'>
      <SignIn />
      <SignUp signUpConfig={{ hiddenDefaults: ['phone_number'] }} />
      <ConfirmSignUp />
    </Authenticator>
  )
}

export default SignUpPage
