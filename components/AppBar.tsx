import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import MuiLink from '@material-ui/core/Link'
import { H6 } from 'mui/Typography'
import Link from './Link'
import { any } from 'prop-types'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
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
  const [signedIn, setSignedIn] = useState<boolean>(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    if (user) {
      setSignedIn(true)
    } else {
      setSignedIn(false)
    }
  }, [user])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container = typeof window !== undefined ? () => window.document.body : undefined
  return (
    <MuiAppBar position='fixed' color='primary' elevation={0} className={classes.appBar}>
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
            <img src='/logo.png' width={225} height={40} alt='Sports Gambling Guide Logo' />
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
                <>
                  <ListItem button key='home' component={Link} href='/'>
                    <>
                      <ListItemIcon>
                        <img src='/logo-alt.png' width={169} height={30} />
                      </ListItemIcon>
                    </>
                  </ListItem>
                  {signedIn ? (
                    <>
                      <ListItem button key='entry' component={Link} href='/auth/entry'>
                        <ListItemIcon>
                          <Icon className='fas fa-ticket-alt fa-xs' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Your Entry' />
                      </ListItem>
                      {/* <ListItem button key='entry' component={Link} href='/auth/leaderboard'>
                        <ListItemIcon>
                          <Icon className='fas fa-trophy fa-xs' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Leaderboard' />
                      </ListItem> */}
                      <ListItem button key='entry' component={Link} href='/auth/rules'>
                        <ListItemIcon>
                          <Icon className='fas fa-tasks fa-xs' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Rules / Prizes' />
                      </ListItem>
                      <ListItem
                        button
                        key='signOut'
                        component={Link}
                        href='/'
                        onClick={handleSignOut}>
                        <ListItemIcon>
                          <Icon className='fas fa-door-open fa-xs' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Sign Out' />
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem button key='home' component={Link} href='/'>
                        <ListItemIcon>
                          <Icon className='fas fa-home' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                      </ListItem>
                      <ListItem button key='entry' component={Link} href='/rules'>
                        <ListItemIcon>
                          <Icon className='fas fa-tasks fa-xs' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Rules / Prizes' />
                      </ListItem>
                      <ListItem button key='signin' component={Link} href='/auth/entry'>
                        <ListItemIcon>
                          <Icon className='fas fa-user-lock fa-xs' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Sign In' />
                      </ListItem>
                    </>
                  )}
                </>
              </List>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <>
              {signedIn ? (
                <>
                  <Link variant='button' href='/auth/entry' className={classes.link}>
                    Your Entry
                  </Link>
                  {/* <Link variant='button' href='/auth/leaderboard' className={classes.link}>
                    Leaderboard
                  </Link> */}
                  <Link variant='button' href='/auth/rules' className={classes.link}>
                    Rules / Prizes
                  </Link>
                  <Link variant='button' href='/' className={classes.link} onClick={handleSignOut}>
                    Sign Out
                  </Link>
                  {/* <MuiLink
                    variant='button'
                    href='/'
                    className={classes.link}
                    onClick={handleSignOut}>
                    Sign Out
                  </MuiLink> */}
                </>
              ) : (
                <>
                  <Link variant='button' href='/' className={classes.link}>
                    Home
                  </Link>
                  <Link variant='button' href='/rules' className={classes.link}>
                    Rules / Prizes
                  </Link>
                  <Link variant='button' href='/auth/entry' className={classes.link}>
                    Sign In
                  </Link>
                </>
              )}
            </>
          </Hidden>
        </nav>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
