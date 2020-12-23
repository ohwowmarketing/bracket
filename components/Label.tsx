import { makeStyles, Theme } from '@material-ui/core/styles'

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

interface TeamProps {
  name: string
  logo: string
}

const Label = ({ name, logo }: TeamProps) => {
  const classes = useStyles()
  return (
    <div className={classes.row}>
      <div className={classes.imgContainer}>
        <img alt={name} src={logo} className={classes.img} />
      </div>
      {name}
    </div>
  )
}

export default Label
