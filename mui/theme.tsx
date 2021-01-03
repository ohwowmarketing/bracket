import { createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600]
    },
    secondary: {
      main: green[800]
    },
    type: 'light'
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  shape: {
    borderRadius: 4
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: 'url(/backgrounds/stadium.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }
      }
    }
  }
})

export default theme
