import { MD } from '@mui/Layout'
import { P } from '@mui/Typography'
import Link from '@components/Link'
import Layout from '@components/Layout/AuthRequired'
import DisplayEntry from '@components/Campaign/NCAA2021/DisplayEntry'

const Entry = ({ username }) => {
  return (
    <Layout>
      <MD align='center'>
        <DisplayEntry username={username} />
        <P>
          <Link href='/auth/leaderboard'>&larr; Return to leaderboard</Link>
        </P>
      </MD>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { username } = query

  return {
    props: { username }
  }
}

export default Entry
