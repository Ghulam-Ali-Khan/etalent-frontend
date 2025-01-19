import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import store from '@/store'; // Adjust the path to your store
import { Provider } from 'react-redux'; // Redux provider
import { SnackbarProvider } from 'notistack'; // Snackbar context
import Router from '@/routes'; // Adjust the path to your routes

import "@/styles/index.scss";

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Theme context */}
      <Provider store={store}> {/* Redux context */}
        <SnackbarProvider
          preventDuplicate
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} // Snackbar context
        >
          <Router /> {/* React Router context */}
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
