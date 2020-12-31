import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/backgrounds/stadium1.svg)',
    backgroundColor: theme.palette.background.default,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    overflow: 'hidden'
    // backgroundSize: 'cover'
  }
}))

const Background = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default Background
