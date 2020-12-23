import useRouter from 'next/router'
import Bracket from '@components/Bracket'
import useUser from '@hooks/useUser'
import CircularProgress from '@material-ui/core/CircularProgress'

const Index = () => {
  const router = useRouter
  const { loading, user } = useUser()

  if (loading) {
    return <CircularProgress color='secondary' />
  }
  if (user) {
    return <Bracket />
  } else {
    router.push('/auth/signin')
  }
}

export default Index