// src/styles/mui/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14589c', // Default primary color
    },
    secondary: {
      main: '#636363', // Default secondary color
    },
    // Add any other color options or customization here
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    // Define other typography styles as needed
  },
  components:{
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },

      styleOverrides: {
        root: {
         minWidth:'100% !important',
         padding:'0px 7rem !important'
        },
      },
    },
  }
  // Any other theme customization
});

export default theme;
