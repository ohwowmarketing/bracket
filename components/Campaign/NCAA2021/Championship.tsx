import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import { Contained } from '@mui/Button'
import Link from '@components/Link'

const useStyles = makeStyles((theme: Theme) => ({
  totalScore: {
    fontSize: '0.85em',
    marginBottom: '10px'
  },
  white: {
    color: '#fff'
  }
}))

interface ChampionshipProps {
  disabled: boolean
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  locked: boolean
}

const Championship = ({ disabled, onChange, locked }: ChampionshipProps) => {
  const classes = useStyles()
  const [tieBreaker, setTieBreaker] = React.useState<number>(0)

  const handleTieBreaker = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTieBreaker(parseInt(evt.target.value))
    onChange(evt)
  }

  return (
    <>
      <Box p={2}>
        <FormLabel component='legend' className={classes.totalScore}>
          {`Total Combined Score:`}
        </FormLabel>

        <TextField
          disabled={disabled}
          type='number'
          name='tieBreaker'
          label='Tie Breaker'
          variant='outlined'
          value={tieBreaker}
          onChange={handleTieBreaker}
          fullWidth
        />
      </Box>
      <Box my={2} textAlign='center'>
        <Contained
          disabled={tieBreaker === 0}
          component={Link}
          href='/ncaa/entry'
          color='primary'
          align='center'>
          <span className={classes.white}>Submit Entry</span>
        </Contained>
      </Box>
    </>
  )
}

export default Championship
