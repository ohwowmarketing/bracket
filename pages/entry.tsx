import useRouter from 'next/router'
import Bracket from '@components/Bracket'
import State from '@components/State'
import useUser from '@hooks/useUser'
import CircularProgress from '@material-ui/core/CircularProgress'

const Index = () => {
  const router = useRouter
  const { loading, user } = useUser()

  if (loading) {
    return <CircularProgress color='secondary' />
  }
  if (user) {
    if (
      user.attributes &&
      user.attributes['custom:state'] &&
      user.attributes['custom:state'].length === 2
    ) {
      return <Bracket />
    }
    return <State />
  } else {
    router.push('/auth/signin')
  }
}

export default Index
