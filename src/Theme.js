import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f4acb7',
    },
    background: {
      default: '#fff1e6',
      paper: '#fef6e4',
    },
    text: {
      primary: '#2f3e46',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightBold: 700, 
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
