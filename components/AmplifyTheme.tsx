import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    ':root': {
      '--amplify-container-height': '50vh',
      '--amplify-background-color': theme.palette.background.default,
      '--amplify-border-radius': '5px', //`${theme.shape.borderRadius.valueOf}px`,
      '--amplify-font-family': theme.typography.fontFamily,
      '--amplify-primary-color': theme.palette.primary.main,
      '--amplify-primary-tint': theme.palette.primary.light,
      '--amplify-primary-shade': theme.palette.primary.dark,
      '--amplify-secondary-color': theme.palette.text.primary,
      '--amplify-secondary-contrast': theme.palette.secondary.contrastText
    },
    'amplify-authenticator': {
      '--background-color': theme.palette.background.default,
      '--border-radius': `${theme.shape.borderRadius}px`,
      '--box-shadow': '1px 1px 4px 0 rgba(0, 0, 0, 0.15)',
      '--container-align': 'center',
      '--container-display': 'flex',
      '--container-height': '20vh',
      '--container-justify': 'center',
      '--margin-bottom': theme.spacing(1),
      '--padding': theme.spacing(3, 4)
      // '--min-width': '20rem',
      // '--width': '28.75rem'
    }
  },
  root: {
    flexGrow: 1
  }
}))

const AmplifyTheme = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default AmplifyTheme
