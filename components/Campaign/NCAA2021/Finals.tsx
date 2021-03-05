import { makeStyles, Theme } from '@material-ui/core/styles'
import Game from './Game'

const useStyles = makeStyles((theme: Theme) => ({
  final4: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center !important',
    '& > div': {
      margin: theme.spacing(2)
    }
  }
}))

const Finals = () => {
  const classes = useStyles()
  return (
    <div className={classes.final4}>
      <Game
        key='a-b'
        id='a-b'
        round='final4'
        home='a-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15'
        away='b-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15'
      />
      <Game
        key='championship'
        id='championship'
        round='championship'
        home='a-b'
        away='c-d'
      />
      <Game
        key='c-d'
        id='c-d'
        round='final4'
        home='c-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15'
        away='d-1-16-8-9-5-12-4-13-6-11-3-14-7-10-2-15'
      />
    </div>
  )
}

export default Finals
