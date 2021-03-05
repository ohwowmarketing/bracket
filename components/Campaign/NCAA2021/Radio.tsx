import Team from './Team'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MuiRadio from '@material-ui/core/Radio'
import { TeamProps } from './Seeds'

const useStyles = makeStyles({
  label: {
    '& > span': {
      paddingTop: '2px',
      paddingBottom: '2px'
    }
  }
})

const Radio = ({ team }: { team: TeamProps | null }) => {
  const classes = useStyles()
  return (
    <>
      {team ? (
        <Team team={team} />
      ) : (
        <FormControlLabel
          control={<MuiRadio size='small' disabled />}
          label='TBD'
          className={classes.label}
        />
      )}
    </>
  )
}

export default Radio
