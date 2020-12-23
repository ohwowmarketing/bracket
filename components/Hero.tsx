import { makeStyles } from '@material-ui/core/styles'
import Link from 'components/Link'
import { SM, MD, Box } from '@mui/Layout'
import { H3, H5, Body1 } from 'mui/Typography'
import { Contained } from 'mui/Button'

const useStyles = makeStyles(theme => ({
  hero: {
    padding: theme.spacing(8, 0, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mini: {
    padding: theme.spacing(1, 0, 1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  secondaryColor: {
    color: theme.palette.secondary.main
  }
}))

const Hero = () => {
  const classes = useStyles()
  return (
    <SM component='main' className={classes.hero}>
      <H3 align='center' color='textPrimary' gutterBottom>
        2020 - 2021 NFL Playoff Bracket Challenge
      </H3>
      <H5 component='p' align='center' color='textSecondary' gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet volutpat ligula.
      </H5>
      <Box mt={2}>
        <Contained component={Link} href='/auth/signup' color='primary' align='center'>
          Create your bracket!
        </Contained>
      </Box>
    </SM>
  )
}

export const MiniHero = () => {
  const classes = useStyles()
  return (
    <MD component='main' className={classes.mini}>
      <H5 align='center' color='textPrimary' gutterBottom>
        2020 - 2021 NFL Playoff Bracket Challenge
      </H5>
      <Body1 align='center' color='textSecondary'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet volutpat ligula.
      </Body1>
    </MD>
  )
}

export default Hero
