import { makeStyles } from '@material-ui/core/styles'
import Link from 'components/Link'
import { SM, MD, Box } from '@mui/Layout'
import { H3, H5, Body1, Caption } from 'mui/Typography'
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
        Sports Gambling Guides 2021 NFL Bracket Challenge
      </H3>
      <H5 component='p' align='center' color='textSecondary' gutterBottom>
        Pick the most accurate NFL Playoff Bracket for your chance to win a share of $1,000 in
        prizes. Compete against your friends and check the live leaderboard to see where you stand!
      </H5>
      <Box mt={2}>
        <Contained component={Link} href='/auth/entry' color='primary' align='center'>
          <span className={classes.white}>Sign In</span>
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
        Sports Gambling Guides 2021 NFL Bracket Challenge
      </H5>
      <Body1 align='center' color='textSecondary'>
        Pick the most accurate NFL Playoff Bracket for your chance to win a share of $1,000 in
        prizes.
      </Body1>
      <Body1 align='center' color='textSecondary'>
        After each round is completed, sign back into your account to see leaderboard results.
      </Body1>
      <Body1 align='center' color='textSecondary'>
        All entries / picks will be locked on Saturday, January 9th, 2021 at 12:05 PM EST.
      </Body1>
      <Body1 align='center' color='textSecondary'>
        Once brackets are locked no additional changes can be made to the brackets submitted.
      </Body1>
      <Caption>
        (See <Link href='/auth/rules'>Rules/Prizes</Link> for details.)
      </Caption>
    </MD>
  )
}

export default Hero
