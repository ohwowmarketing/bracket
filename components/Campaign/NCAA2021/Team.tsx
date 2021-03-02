import { makeStyles, Theme } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { TeamProps } from './Seeds'

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: '1px',
    padding: '1px',
    width: '95%'
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
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(1)
  },
  logo: {
    width: '24px',
    height: '24px',
    objectFit: 'fill'
  }
}))

const Team = ({ team }: { team: TeamProps }) => {
  const { id, seed, name, logo } = team
  const classes = useStyles()
  return (
    <FormControlLabel
      value={id}
      control={<Radio />}
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
    />
  )
}

export default Team
