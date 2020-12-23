import Image from 'next/image'
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
    position: 'relative',
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(1)
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
        <Image alt={name} src={logo} layout='fill' objectFit='contain' />
      </div>
      {name}
    </div>
  )
}

export default Label
