import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoggedIn: (state, action) => {
      const userDetails = { ...action.payload };
      delete userDetails.baseModel.token;

      localStorage.setItem('token', action.payload.baseModel.token);

      return { ...state, isAuthenticated: true, user: userDetails.userInfo };
    },
    getUserDetail: (state, action) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload,
    }),
    onLoggedOut: () => {
      localStorage.removeItem('token');

      return { ...initialState };
    },
    userLoaded: (state, action) => {
      const response = action.payload;
      
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: response,
      };
    },
  },
});

export const { onLoggedIn, getUserDetail, onLoggedOut, userLoaded } = authSlice.actions;
export default authSlice.reducer;
