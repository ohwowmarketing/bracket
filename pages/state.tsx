// import useRouter from 'next/router'
import { withSSRContext } from 'aws-amplify'
import State from '@components/State'

const Page = () => {
  return <State />
}

export const getServerSideProps = async ({ req, res }) => {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser()
    if (user.attributes['custom:state'].length === 2) {
      res.writeHead(302, { Location: '/entry' })
      res.end()
    }
    return {
      props: {}
    }
  } catch (err) {
    res.writeHead(302, { Location: '/auth/signin' })
    res.end()
  }
  return { props: {} }
}

export default Page
