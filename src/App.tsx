import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
// import store from '@/store'; // Adjust the path to your store
import { Provider, useDispatch } from 'react-redux'; // Redux provider
import { SnackbarProvider } from 'notistack'; // Snackbar context
import Router from '@/routes'; // Adjust the path to your routes

import "@/styles/index.scss";
import "@/styles/components/utilis.scss";
import { useEffect } from 'react';
import { useLoadUserQuery } from './services/private/auth';
import { userLoaded } from './store/slices/authSlice';
import { testFunc } from './utilis/contants';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {

  const dispatch = useDispatch();
  const { data: loadUserData } = useLoadUserQuery({}) as any; // Disable type checking here

  useEffect(() => {
    if (loadUserData) {
      dispatch(userLoaded(loadUserData));
    }
  }, [loadUserData]);

  testFunc();

  return (

    <ThemeProvider theme={theme}> {/* Theme context */}
      <I18nextProvider i18n={i18n}>
        {/* <Provider store={store}> Redux context */}
        <SnackbarProvider
          preventDuplicate
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} // Snackbar context
        >
          <Router /> {/* React Router context */}
        </SnackbarProvider>
        {/* </Provider> */}
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
