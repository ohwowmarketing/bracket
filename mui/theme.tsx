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
          // backgroundImage: 'url(/backgrounds/stadium.svg)',
          // backgroundImage: 'url(/backgrounds/court/court.png)',
          backgroundImage:
            'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/backgrounds/court/court.png)',
          // backgroundImage:
          //   'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/backgrounds/court/court.png)',
          // backgroundImage:
          //   '-webkit-image-set(url(/backgrounds/court/court-1x.png) 1x, url(/backgrounds/court/court-2x.png) 2x, url(/backgrounds/court/court-3x.png) 3x, url(/backgrounds/court/court-4x.png) 4x)',
          // backgroundImage:
          //   'image-set(url(/backgrounds/court/court-1x.png) 1x, url(/backgrounds/court/court-2x.png) 2x, url(/backgrounds/court/court-3x.png) 3x, url(/backgrounds/court/court-4x.png) 4x)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }
      }
    }
  }
})

export default theme
