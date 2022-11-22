import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthStatus, Reducer } from '~/constants';
import { Error, User } from '~/types';

import { checkAuthStatus, login, logout } from '../../api-actions/user';

type State = {
  authStatus: AuthStatus;
  user: User | null;
  loading: boolean;
  error: Error;
};

const initialState: State = {
  authStatus: AuthStatus.NoAuth,
  user: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      /* CHECK AUTH STATUS */
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.authStatus = AuthStatus.NoAuth;
        state.loading = false;
        state.error = action.payload;
      })

      /* LOGIN */
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.authStatus = AuthStatus.NoAuth;
        state.loading = false;
        state.error = action.payload;
      })

      /* LOGOUT */
      .addCase(logout.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { checkAuthStatus, login, logout };

export const { setUserData } = slice.actions;

export default slice;