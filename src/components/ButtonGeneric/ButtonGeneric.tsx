import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material'


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#33eb91',
      darker: '#053e85',
    },
    secondary: {
      main: '#d7de23'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

import React from 'react'

const ButtonGeneric = (props:any) => {

  const fuente = 'siemnes';

  return (
    <ThemeProvider theme={theme}>
      <Button sx={{fontFamily: {fuente} } }color="secondary" variant="outlined">
        {props.children}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonGeneric;


