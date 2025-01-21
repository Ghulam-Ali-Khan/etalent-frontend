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
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       width: '100%', // Allow the container to expand fully
    //       paddingLeft: '1rem',
    //       paddingRight: '1rem',
    //       '@media (min-width: 1280px)': {
    //         maxWidth: '1350px', // Slightly increase the width for screens larger than `lg`
    //       },
    //       '@media (min-width: 1536px)': {
    //         maxWidth: '1536px', // Keep default `xl` width for larger screens
    //       },
    //     },
    //   },
    // },
  }
  // Any other theme customization
});

export default theme;
