import '@aws-amplify/ui/dist/style.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Amplify from 'aws-amplify'
import theme from 'mui/theme'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { Provider } from 'react-redux'
import config from 'src/aws-exports'
import { useStore } from 'store'

Amplify.configure({
  ...config,
  ssr: true
})

const App = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Sports Gambling Guides 2021 NCAA Bracket Challenge</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <meta
          name='description'
          content='Pick the most accurate NCAA Playoff Bracket for your chance to win $1,000 in prizes. Compete against your friends and check the live leaderboard to see where you stand!'
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
