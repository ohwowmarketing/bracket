import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { teamById, TeamParams } from '@lib/teams'
import Loading from '@components/Loading'

const useStyles = makeStyles((theme: Theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'flex-start',
    alignItems: 'center',
    fontSize: '0.8em'
  },
  imgContainer: {
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(1)
  },
  img: {
    width: '24px',
    height: '24px',
    objectFit: 'fill'
  }
}))

const TeamDisplay = ({ id }) => {
  const classes = useStyles()
  const [loading, setLoading] = React.useState(true)
  const [team, setTeam] = React.useState(null)
  React.useEffect(() => {
    const fetchTeam = async () => {
      const tempTeam = await teamById(id)
      if (tempTeam) {
        setTeam(tempTeam)
      }
      setLoading(false)
    }
    if (id) {
      fetchTeam()
    } else {
      setLoading(false)
    }
  }, [id])
  return loading ? (
    <CircularProgress color='secondary' size={14} />
  ) : (
    <>
      <div className={classes.row}>
        {team ? (
          <>
            <div className={classes.imgContainer}>
              <img alt={team.name} src={team.logo} className={classes.img} />
            </div>
            {`${team.name} (${team.seed})`}
          </>
        ) : (
          <div>{'TBD'}</div>
        )}
      </div>
    </>
  )
}

export default TeamDisplay
