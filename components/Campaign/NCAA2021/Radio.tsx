import Team from './Team'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MuiRadio from '@material-ui/core/Radio'
import { SeedProps } from './Seeds'

const useStyles = makeStyles({
  label: {
    '& > span': {
      paddingTop: '2px',
      paddingBottom: '2px'
    }
  }
})

const Radio = ({ groupSeed }: { groupSeed: SeedProps | null }) => {
  const classes = useStyles()
  return (
    <>
      {groupSeed ? (
        <Team groupSeed={groupSeed} />
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
