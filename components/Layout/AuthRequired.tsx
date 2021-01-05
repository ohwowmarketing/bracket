import * as React from 'react'
import AppBar from 'components/AppBar'
import Footer from 'components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  RequireNewPassword
} from 'aws-amplify-react'
import Alert from '@material-ui/lab/Alert'
import { Container, Box, MD } from '@mui/Layout'
import useAmplifyAuth from '@hooks/useAmplifyAuth'
import { authTheme } from '@components/Auth/theme'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar
}))

type UserContextType = {
  user: any
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined)

const Layout = ({ children }) => {
  const classes = useStyles()
  const [displayedError, setDisplayedError] = React.useState<string>('')
  // const [forceClose, setForceClose] = React.useState<boolean>(false)
  const {
    state: { user, errorMessage },
    handleSignOut,
    handleClearError
  } = useAmplifyAuth()

  const map = message => {
    setDisplayedError(message)

    return message
  }

  React.useEffect(() => {
    if (errorMessage !== '') {
      if (/incorrect.*username.*password/i.test(errorMessage)) {
        setDisplayedError('Incorrect username or password')
      } else if (/username.*expression/i.test(errorMessage)) {
        setDisplayedError('Username may not contain spaces')
      } else {
        setDisplayedError(errorMessage)
      }
    }
  }, [errorMessage])

  return !user ? (
    <>
      <AppBar />
      <div className={classes.offset} />
      <Container>
        <Box my={4}>
          <MD>
            {displayedError !== '' && (
              <Alert severity='warning' onClose={handleClearError}>
                {displayedError}
              </Alert>
            )}
            <Authenticator
              theme={authTheme}
              errorMessage={map}
              hideDefault={true}
              authState='signIn'>
              <SignIn />
              <SignUp
                signUpConfig={{
                  hiddenDefaults: ['phone_number'],
                  signUpFields: [
                    {
                      label: 'State Abbreviation',
                      placeholder: 'DC',
                      key: 'custom:state',
                      required: true,
                      displayOrder: 4,
                      type: 'string'
                    }
                  ]
                }}
              />
              <ConfirmSignUp />
              <ForgotPassword />
              <RequireNewPassword />
            </Authenticator>
          </MD>
        </Box>
      </Container>
      <Footer />
    </>
  ) : (
    <UserContext.Provider value={{ user }}>
      <AppBar user={user} handleSignOut={handleSignOut} />
      <div className={classes.offset} />
      <Container>
        <Box my={4}>{children}</Box>
      </Container>
      <Footer />
    </UserContext.Provider>
  )
}

export default Layout
