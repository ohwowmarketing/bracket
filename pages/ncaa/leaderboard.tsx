import Leaderboard, { LeaderProps } from '@components/Campaign/NCAA2021/Leaderboard'
import { picks } from '@components/Campaign/NCAA2021/Picks'
import { getScore } from '@components/Campaign/NCAA2021/Score'
import Layout from '@components/Layout/AuthRequired'

const Page = ({ leaders }: { leaders: LeaderProps[] }) => {
  return (
    <Layout>
      <Leaderboard leaders={leaders} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const leaders = picks.map(pick => {
    return getScore(pick)
  })
  leaders.sort((a, b) =>
    parseInt(a.total) > parseInt(b.total)
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
