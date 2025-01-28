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
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2rem', // Mobile-specific size
      },
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.75rem', // Mobile-specific size
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Mobile-specific size
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // Mobile-specific size
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '1rem', // Mobile-specific size
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.7,
      '@media (max-width:600px)': {
        fontSize: '0.875rem', // Mobile-specific size
      },
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1rem', // Mobile-specific size
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.43,
      '@media (max-width:600px)': {
        fontSize: '0.875rem', // Mobile-specific size
      },
    },
  },
  components: {
    // Add any component-specific customizations here
  },
});

export default theme;
