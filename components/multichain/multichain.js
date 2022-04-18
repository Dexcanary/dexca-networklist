import React, { useState } from 'react';
import { Typography, Paper, Grid, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Web3 from 'web3';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

import classes from './multichain.module.css'

import stores from '../../stores/index.js'
import { getProvider } from '../../utils'

export default function Multichain({ closeMultichain }) {

  const [ checked, setChecked ] = useState(false)

  const navigateToMultichain = () => {
    window.open("https://multichain.xyz", "_blank")
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: '#fff'
      }
    },
    typography: {
      fontFamily: [
        'Inter',
        'Arial',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        fontSize: '12px'
      }
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '32px',
          padding: '9px 16px'
        },
        containedPrimary: {
          backgroundColor: '#fff',
          color: '#000'
        }
      },
      MuiFormControlLabel: {
        root: {
          color: '#fff'
        }
      }
    },
  });

  return (
    <Paper elevation={ 1 } className={ classes.chainContainer } key={ 'multichain' } >
      <ThemeProvider theme={theme}>
        <div className={ classes.topInfo }>
          <img src='https://s3-alpha-sig.figma.com/img/09cd/fc9e/80f5c54398af1ff7e1ce7483a6d7229f?Expires=1651449600&Signature=MzIgZDO4QBNkxJZW2iLA3yZoSUnFGAcc0A-t2~zF83G0Fui~bJuUv3wq7o--~O8n1zLZ-BAcCaqnqWbuVGhIin15TKXacmae7Bi6Zh67ltsuGx3Gj9g~f3x87pnFUwD7Bglc8dmojnlGlHU9sig1~S3HfpDQZVd9tW3WNrS9o7CS1u3~HM9i9~vHVr785BtMhLApK4MloBxOiQdPNIpsQ8nNhnl8-p0sKKj2Ag9zagtX3XKvfQgakzL6D6ZeULeW7B9HxmYLbljboSEsJUQxZGWYofzI-MpkJXmCXqmGFVjZnzQyR6~uB9WFxiEEqQPToK6~gEe2MqkoptWqADcmbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' width={ 126 } height={ 126 } className={ classes.avatar } />
          <Typography variant='subtitle1' className={ classes.descriptionText} align='center' >Safe cryptocurrency wallet which allow user to store multiples account also supporting all chains and tokens.</Typography>
          <Button
            className={ classes.tryButton }
            variant='contained'
            disableElevation
            onClick={ navigateToMultichain }
            color='secondary'
            endIcon={<ArrowForwardIcon />}
          >
            <Typography className={ classes.buttonLabel }>Try out <b>hexapocket.wallet</b></Typography>
          </Button>
        </div>
        <div className={ classes.bottomActions }>
          <FormControlLabel
            control={<Checkbox checked={ checked } onChange={handleChange} name="checked" />}
            label="Don't show again"
          />
          <Button
            size='small'
            onClick={ () => { closeMultichain(checked) } }
            endIcon={<CloseIcon />}
          >
            <Typography className={ classes.buttonLabel }>Close</Typography>
          </Button>
        </div>
      </ThemeProvider>
    </Paper>
  )
}
