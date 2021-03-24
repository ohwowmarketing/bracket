import { withSSRContext } from 'aws-amplify'
import { NextApiRequest } from 'next'
import Layout from '@components/Layout/AuthRequired'
import Leaderboard, {
  LeaderProps
} from '@components/Campaign/NCAA2021/Leaderboard'
import { picks } from '@components/Campaign/NCAA2021/Picks'
import { getScore } from '@components/Campaign/NCAA2021/Score'

const Page = ({
  leaders,
  score
}: {
  leaders: LeaderProps[]
  score?: LeaderProps
}) => {
  return (
    <Layout>
      <Leaderboard leaders={leaders} score={score} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const leaders = picks.map((pick) => {
    return getScore(pick)
  })
  leaders.sort((a, b) =>
    a.total > b.total
      ? -1
      : a.total === b.total
      ? Math.random() > 0.5
        ? -1
        : 1
      : 1
  )
  const prizeLeaders = leaders.slice(0, 6)

  return {
    props: {
      leaders: prizeLeaders
    }
  }
}

export default Page
