import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import State from '@components/State'
import Loading from '@components/Loading'

const Enter = () => {
  const router = useRouter()
  const [showStateForm, setShowStateForm] = useState<boolean>(false)
  useEffect(() => {
    const checkUserState = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        if (user) {
          if (user.attributes['custom:state'] && user.attributes['custom:state'].length === 2) {
            router.push('/entry')
          } else {
            setShowStateForm(true)
          }
        }
      } catch (e) {
        router.push('/auth/signin')
      }
    }
    checkUserState()
  }, [])

  return <>{showStateForm ? <State /> : <Loading />}</>
}

export default Enter
