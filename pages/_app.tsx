import { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import theme from 'mui/theme'
// import Background from 'components/Background'
import AppBar from 'components/AppBar'
import Footer from 'components/Footer'
import AmplifyTheme from 'components/AmplifyTheme'
import '@aws-amplify/ui/dist/style.css'
import Amplify from 'aws-amplify'
import config from 'src/aws-exports'
Amplify.configure({
  ...config,
  ssr: true
})

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar
}))

const App = ({ Component, pageProps }: AppProps) => {
  const classes = useStyles()
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Sports Gambling Guides 2021 NFL Bracket Challenge</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <meta
          name='description'
          content='Pick the most accurate NFL Playoff Bracket for your chance to win $1,000 in prizes. Compete against your friends and check the live leaderboard to see where you stand!'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Background> */}
        <AppBar />
        <div className={classes.offset} />
        <Container>
          <Box my={4}>
            <AmplifyTheme>
              <Component {...pageProps} />
            </AmplifyTheme>
          </Box>
        </Container>
        <Footer />
        {/* </Background> */}
      </ThemeProvider>
    </>
  )
}

export default App
