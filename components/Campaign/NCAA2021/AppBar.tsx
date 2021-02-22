import Link from '@components/Link'
import MuiAppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import MuiLink from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { H6 } from '@mui/Typography'
import * as React from 'react'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.background.paper
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper
  },
  toolbar: theme.mixins.toolbar,
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.primary.main
  }
}))

interface AppBarProps {
  user?: any
  handleSignOut?: any
}

const AppBar = ({ user, handleSignOut }: AppBarProps) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container =
    typeof window !== undefined ? () => window.document.body : undefined
  return (
    <MuiAppBar
      position='fixed'
      color='primary'
      elevation={0}
      className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='primary'
          aria-label='open drawer'
          onClick={handleDrawerToggle}>
          <Icon className='fas fa-bars' />
        </IconButton>
        <H6 color='primary' className={classes.title} noWrap>
          <MuiLink href='https://sportsgamblingguides.com'>
            <img
              src='/logo.png'
              width={225}
              height={40}
              alt='Sports Gambling Guide Logo'
            />
          </MuiLink>
        </H6>
        <nav>
          <Hidden smUp implementation='css'>
            <Drawer
              container={container}
              variant='temporary'
              anchor='left'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}>
              <div className={classes.toolbar} />
              <Divider />
              <List>
                <ListItem button key='home-icon' component={Link} href='/'>
                  <ListItemIcon>
                    <img src='/logo-alt.png' width={169} height={30} />
                  </ListItemIcon>
                </ListItem>
                <ListItem button key='home' component={Link} href='/ncaa'>
                  <ListItemIcon>
                    <Icon className='fas fa-home' color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItem>
                <ListItem
                  button
                  key='entry'
                  component={Link}
                  href='/ncaa/entry'>
                  <ListItemIcon>
                    <Icon className='fas fa-ticket-alt fa-xs' color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Entry' />
                </ListItem>
                <ListItem
                  button
                  key='rules'
                  component={Link}
                  href='/ncaa/rules'>
                  <ListItemIcon>
                    <Icon className='fas fa-tasks fa-xs' color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Rules / Prizes' />
                </ListItem>
                <ListItem
                  button
                  key='leaderboard'
                  component={Link}
                  href='/ncaa/leaderboard'>
                  <ListItemIcon>
                    <Icon className='fas fa-list-ol fa-xs' color='primary' />
                  </ListItemIcon>
                  <ListItemText primary='Leaderboard' />
                </ListItem>
                <ListItem
                  button
                  key='winners'
                  component={Link}
                  href='/ncaa/winners'>
                  <ListItemIcon>
                    <Icon className='fas fa-trophy fa-xs' color='primary' />
                  </ListItemIcon>
                  <ListItemText primary={`Past Winner's`} />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Link
              key='home'
              variant='button'
              href='/ncaa'
              className={classes.link}>
              Home
            </Link>
            <Link
              key='entry'
              variant='button'
              href='/ncaa/entry'
              className={classes.link}>
              Entry
            </Link>
            <Link
              key='rules'
              variant='button'
              href='/ncaa/rules'
              className={classes.link}>
              Rules / Prizes
            </Link>
            <Link
              key='leaderbaord'
              variant='button'
              href='/ncaa/leaderboard'
              className={classes.link}>
              Leaderboard
            </Link>
            <Link
              key='winners'
              variant='button'
              href='/ncaa/winners'
              className={classes.link}>
              Past Winner's
            </Link>
          </Hidden>
        </nav>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
