import AppBar from 'components/AppBar'
import Footer from 'components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar
}))

const Layout = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar />
      <div className={classes.offset} />
      <Container>
        <Box my={4}></Box>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
