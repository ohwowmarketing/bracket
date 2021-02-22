import { makeStyles } from '@material-ui/core/styles'
import Link from '@components/Link'
import { SM, Box } from '@mui/Layout'
import { H3, H5 } from '@mui/Typography'
import { Contained } from '@mui/Button'

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: theme.spacing(8, 0, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  white: {
    color: '#fff'
  }
}))

const Hero = () => {
  const classes = useStyles()
  return (
    <SM component='main' className={classes.hero}>
      <H3 align='center' color='textPrimary' gutterBottom>
        Sports Gambling Guides 2021 NCAA Bracket Challenge
      </H3>
      <H5 component='p' align='center' color='textSecondary' gutterBottom>
        Pick the most accurate NCAA Playoff Bracket for your chance to win a
        share of $1,000 in prizes. Compete against your friends and check the
        live leaderboard to see where you stand!
      </H5>
      <Box mt={2}>
        <Contained
          component={Link}
          href='/auth/entry'
          color='primary'
          align='center'>
          <span className={classes.white}>Sign In</span>
        </Contained>
      </Box>
    </SM>
  )
}

export default Hero
