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
          // backgroundImage: 'url(/backgrounds/ncaa/ncaa-3x.jpg)',
          backgroundImage:
            'linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/backgrounds/ncaa/ncaa-3x.jpg)',
          // backgroundImage: `-webkit-image-set('/backgrounds/ncaa/ncaa-1x.jpg' 1x, '/backgrounds/ncaa/ncaa-2x.jpg' 2x, '/backgrounds/ncaa/ncaa-3x.jpg' 3x, '/backgrounds/ncaa/ncaa-4x.jpg' 4x)`,
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
