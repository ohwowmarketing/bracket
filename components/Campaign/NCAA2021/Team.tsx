import { useSelector } from 'react-redux'
import { makeStyles, Theme } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { TeamProps } from './Seeds'

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    '& > span': {
      paddingTop: '2px',
      paddingBottom: '2px'
    }
  },
  teamBox: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'flex-start',
    alignItems: 'center',
    fontSize: '0.8em',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  logoBox: {
    width: '20px',
    height: '20px',
    marginRight: theme.spacing(1)
  },
  logo: {
    width: '20px',
    height: '20px',
    objectFit: 'fill'
  }
}))

const Team = ({ team }: { team: TeamProps }) => {
  const { id, seed, name, logo } = team

  const { locked } = useSelector((state) => state)
  const classes = useStyles()

  return (
    <FormControlLabel
      value={id}
      control={<Radio size='small' disabled={locked} />}
      label={
        <div className={classes.teamBox}>
          {logo && (
            <div className={classes.logoBox}>
              <img
                alt={name}
                src={`/logos/ncaa/${logo}`}
                className={classes.logo}
              />
            </div>
          )}
          {`(${seed})${String.fromCharCode(160)}${name}`}
        </div>
      }
      className={classes.label}
    />
  )
}

export default Team
