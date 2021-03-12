import * as React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MuiLink from '@material-ui/core/Link'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@components/Link'
import { MD, Box } from '@mui/Layout'
import { H4, H5, Caption } from '@mui/Typography'
import { Contained } from '@mui/Button'

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    padding: theme.spacing(4, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: '10px'
  },
  white: {
    color: '#fff'
  },
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

const Hero = () => {
  const classes = useStyles()
  const theme = useTheme()
  const verticalPromos = useMediaQuery(theme.breakpoints.up('md'))
  const [isChecked, setIsChecked] = React.useState<boolean>(false)

  return (
    <MD component='main' className={classes.hero}>
      <Box
        className={clsx({
          [classes.vertical]: verticalPromos,
          [classes.horizontal]: !verticalPromos
        })}>
        <Box>
          <MuiLink href='http://dkng.co/1000SGG'>
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
          </MuiLink>
        </Box>
        <Box m={2}>
          <H4 align='center' color='textPrimary'>
            Sports Gambling Guides
          </H4>
          <H4 align='center' color='textPrimary' gutterBottom>
            2021 NCAA Bracket Challenge
          </H4>
          <H5 component='p' align='center' color='textSecondary' gutterBottom>
            Pick the most accurate NCAA Playoff Bracket for your chance to win a
            share of $1,000 in prizes. Compete against your friends and check
            the live leaderboard to see where you stand!
          </H5>
          <Box mt={2} py={2} textAlign='center'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  name='agreement'
                  color='primary'
                />
              }
              label={
                <Caption align='left'>
                  I certify that I am 21+. Have you considered making your
                  sports betting account with one of Sports Gambling Guides list
                  of Sports Betting Operators?{' '}
                  <MuiLink href='http://dkng.co/1000SGG'>
                    CLICK HERE TO SIGN UP
                  </MuiLink>{' '}
                  for DraftKings Sportsbook and get 64-1 odds on any underdog in
                  March Mania (T&C's Apply).
                </Caption>
              }
            />
          </Box>
          <Box m={2} textAlign='center'>
            <Contained
              component={Link}
              href='/ncaa/entry'
              color='primary'
              disabled={!isChecked}>
              <span className={classes.white}>Create Entry</span>
            </Contained>
          </Box>
        </Box>
        <Box>
          <MuiLink href='http://dkng.co/1000SGG'>
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
          </MuiLink>
        </Box>
      </Box>
    </MD>
  )
}

export default Hero
