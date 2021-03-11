import * as React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  RequireNewPassword
} from 'aws-amplify-react'
import Link from '@material-ui/core/Link'
import Alert from '@material-ui/lab/Alert'
import { Container, Box } from '@mui/Layout'
import useAmplifyAuth from '@hooks/useAmplifyAuth'
import { authTheme } from '@components/Auth/theme'
import AppBar from '@components/Layout/AppBar'
import Footer from '@components/Layout/Footer'

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  horizontal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  vertical: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

type UserContextType = {
  user: any
}

export const UserContext = React.createContext<UserContextType | undefined>(
  undefined
)

const Layout = ({ children }) => {
  const theme = useTheme()
  const verticalPromos = useMediaQuery(theme.breakpoints.up('md'))
  const classes = useStyles()
  const [displayedError, setDisplayedError] = React.useState<string>('')
  const {
    state: { user, errorMessage },
    handleSignOut,
    handleClearError
  } = useAmplifyAuth()

  const map = (message) => {
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
        {displayedError !== '' && (
          <Alert severity='warning' onClose={handleClearError}>
            {displayedError}
          </Alert>
        )}
        <Box
          className={clsx({
            [classes.vertical]: verticalPromos,
            [classes.horizontal]: !verticalPromos
          })}
          mt={12}>
          <Box mt={8}>
            <Link href='http://dkng.co/1000SGG'>
              {verticalPromos ? (
                <img
                  src='/promo/draftkings.gif'
                  width='150'
                  height='300'
                  alt='DraftKings Promo: Bet $4 to win $256'
                />
              ) : (
                <img
                  src='/promo/draftkings-mobile.gif'
                  width='320'
                  height='50'
                  alt='DraftKings Promo: Bet $4 to win $256'
                />
              )}
            </Link>
          </Box>
          <Box px={4}>
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
          </Box>
          <Box mt={8}>
            <Link href='http://dkng.co/1000SGG'>
              {verticalPromos ? (
                <img
                  src='/promo/draftkings.gif'
                  width='150'
                  height='300'
                  alt='DraftKings Promo: Bet $4 to win $256'
                />
              ) : (
                <img
                  src='/promo/draftkings-mobile.gif'
                  width='320'
                  height='50'
                  alt='DraftKings Promo: Bet $4 to win $256'
                />
              )}
            </Link>
          </Box>
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
