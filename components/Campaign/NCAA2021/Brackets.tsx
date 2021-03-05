import clsx from 'clsx'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Finals from './Finals'
import Round from './Round'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  },
  centerLayout: {
    justifyContent: 'space-evenly'
    // justifyContent: 'center',
  },
  leftLayout: {
    justifyContent: 'flex-start'
  }
}))

const Brackets = () => {
  const classes = useStyles()
  const theme = useTheme()
  const centerBrackets = useMediaQuery(theme.breakpoints.up('xl'))
  const rounds: Array<'first' | 'second' | 'sweet16' | 'elite8'> = [
    'first',
    'second',
    'sweet16',
    'elite8'
  ]
  return (
    <form>
      <div
        className={clsx(classes.root, {
          [classes.centerLayout]: centerBrackets,
          [classes.leftLayout]: !centerBrackets
        })}>
        {rounds.map((r) => (
          <Round key={`a-c-${r}`} groups={['a', 'c']} round={r} />
        ))}
        <Finals />
        {rounds
          .slice(0)
          .reverse()
          .map((r) => (
            <Round key={`b-d-${r}`} groups={['b', 'd']} round={r} />
          ))}
      </div>
    </form>
  )
}

export default Brackets
