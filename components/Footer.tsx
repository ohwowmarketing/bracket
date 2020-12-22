import { makeStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import { Body2 } from '@mui/Typography'
import { MD, Box } from '@mui/Layout'

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(4)
    }
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <MD component='footer' className={classes.footer}>
      <Box mt={5}>
        <Body2 color='textSecondary' align='center'>
          {'© '}
          {new Date().getFullYear()}{' '}
          <Link color='inherit' href='https://sportsgamblingguides.com'>
            Sports Gambling Guides
          </Link>
          {'. All Rights Reserved'}
        </Body2>
      </Box>
    </MD>
  )
}

export default Footer
