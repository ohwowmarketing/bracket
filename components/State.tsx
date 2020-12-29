import * as React from 'react'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { SM } from '@mui/Layout'
import { Select, Checkbox } from '@mui/Form'
import { Contained } from '@mui/Button'
import { states } from '@lib/states'
import useForm from '@hooks/useForm'
import useUser from '@hooks/useUser'
import axios from 'axios'

// 'http://localhost:3000/api/mc/add'
const endpoint: string = 'https://sggplayoffs.com/api/mc/add'

const stateOptions = states.map(state => ({ label: state.name, value: state.abbreviation }))

interface FormValues {
  state: string
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  field: {
    padding: theme.spacing(2, 0)
  },
  btn: {
    marginTop: theme.spacing(2)
  }
}))

const StateForm = () => {
  const { loading, user } = useUser()
  const router = useRouter()
  const classes = useStyles()
  const [confirmed, setConfirmed] = React.useState<boolean>(false)
  const initialValues: FormValues = { state: '' }
  const { values, handleChange, handleSubmit } = useForm(async () => {
    if (!loading && user && values.state !== '' && confirmed) {
      await Auth.updateUserAttributes(user, { 'custom:state': values.state })
      await axios.post(endpoint, {
        email: user.attributes.email,
        state: values.state
      })
      // Save user state and send MailChimp API
      router.push('/entry ')
    }
  }, initialValues)
  const handleConfirm = () => {
    setConfirmed(!confirmed)
  }
  return (
    <SM>
      <Paper>
        <div className={classes.root}>
          <form onSubmit={handleSubmit}>
            <Select
              name='state'
              label='Confirm your state'
              options={stateOptions}
              onChange={handleChange}
              value={values.state}
              className={classes.field}
            />
            <Checkbox
              name='confirm'
              label='Open to US Residents. No purchase necessary.'
              onChange={handleConfirm}
              value={confirmed}
            />
            <Contained type='submit' className={classes.btn}>
              Submit
            </Contained>
          </form>
        </div>
      </Paper>
    </SM>
  )
}

export default StateForm
