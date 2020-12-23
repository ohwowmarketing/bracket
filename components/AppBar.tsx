import { useState } from 'react'
import Image from 'next/image'
import { Auth } from 'aws-amplify'
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
import useUser from 'hooks/useUser'

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

const AppBar = () => {
  const classes = useStyles()
  const { loading, user } = useUser()
  const [mobileOpen, setMobileOpen] = useState(false)
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
          <Link href='/'>
            <Image src='/logo.png' width={225} height={40} />
          </Link>
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
                        <Image src='/logo-alt.png' width={169} height={30} />
                      </ListItemIcon>
                    </>
                  </ListItem>
                  {!loading && user ? (
                    <>
                      <ListItem button key='entry' component={Link} href='/entry'>
                        <>
                          <ListItemIcon>
                            <Icon className='fas fa-ticket-alt fa-xs' color='primary' />
                          </ListItemIcon>
                          <ListItemText primary='Your Entry' />
                        </>
                      </ListItem>
                      <ListItem button key='signOut' onClick={() => Auth.signOut()}>
                        <ListItemIcon>
                          <Icon className='fas fa-door-open fa-xs' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Sign Out' />
                      </ListItem>
                    </>
                  ) : (
                    <ListItem button key='profile' component={Link} href='/auth/signin'>
                      <>
                        <ListItemIcon>
                          <Icon className='fas fa-user-lock' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Sign In' />
                      </>
                    </ListItem>
                  )}
                </>
              </List>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <>
              {!loading && user ? (
                <>
                  <Link variant='button' href='/entry' className={classes.link}>
                    Your Entry
                  </Link>
                  <Link
                    variant='button'
                    href='/'
                    className={classes.link}
                    onClick={() => Auth.signOut()}>
                    Sign Out
                  </Link>
                </>
              ) : (
                <>
                  <Link variant='button' href='/auth/signin' className={classes.link}>
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
