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
import Snackbar from '@material-ui/core/Snackbar'
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
  const [snackbarMessage, setSnackbarMessage] = React.useState<string>('')
  const {
    state: { user, errorMessage },
    handleSignOut
  } = useAmplifyAuth()
  const handleCloseSnackbar = () => {
    setSnackbarMessage('')
  }
  React.useEffect(() => {
    setSnackbarMessage(errorMessage)
  }, [errorMessage])
  return !user ? (
    <>
      <AppBar />
      <div className={classes.offset} />
      <Container>
        <Box my={4}>
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
            <Authenticator theme={authTheme} hideDefault={true} authState='signIn'>
              <SignIn />
              <SignUp
                signUpConfig={{
                  hiddenDefaults: ['phone_number'],
                  signUpFields: [
                    {
                      label: 'State',
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
