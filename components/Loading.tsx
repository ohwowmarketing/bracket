import CircularProgress from '@material-ui/core/CircularProgress'
import { MD } from '@mui/Layout'

const Loading = () => {
  return (
    <MD align='center'>
      <CircularProgress color='secondary' />
    </MD>
  )
}

export default Loading
