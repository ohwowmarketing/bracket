import { AppProps } from 'next/app'
import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'mui/theme'
import '@aws-amplify/ui/dist/style.css'
import Amplify from 'aws-amplify'
import config from 'src/aws-exports'

Amplify.configure({
  ...config,
  ssr: true
})
// export const UserContext = React.createContext()

const App = ({ Component, pageProps }: AppProps) => {
  // const {
  //   state: { user },
  //   handleSignOut
  // } = useAmplifyAuth()
  React.useEffect(() => {
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
