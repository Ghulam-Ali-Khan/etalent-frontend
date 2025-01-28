import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import store from '@/store'; // Adjust the path to your store
import { Provider, useDispatch } from 'react-redux'; // Redux provider
import { SnackbarProvider } from 'notistack'; // Snackbar context
import Router from '@/routes'; // Adjust the path to your routes

import "@/styles/index.scss";
import { useEffect } from 'react';
import { useLoadUserQuery } from './services/private/auth';
import { userLoaded } from './store/slices/authSlice';

function App() {

  // const dispatch = useDispatch();
  // const { data: loadUserData } = useLoadUserQuery({}) as any; // Disable type checking here

  // useEffect(() => {
  //   if (loadUserData) {
  //     dispatch(userLoaded(loadUserData));
  //   }
  // }, [loadUserData]);

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
