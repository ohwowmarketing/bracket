import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/backgrounds/bg1.jpg)',
    backgroundColor: theme.palette.background.default,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))

const Background = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default Background
