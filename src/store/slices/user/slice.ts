import { createSlice } from '@reduxjs/toolkit';

import { AuthStatus, Reducer } from '~/constants';

import { checkAuthStatus, login, logout } from '../../api-actions/user';
import { State } from './types';

const initialState: State = {
  authStatus: AuthStatus.Unknown,
  user: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {},
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
      .addCase(checkAuthStatus.rejected, (state, { payload }) => {
        state.authStatus = AuthStatus.NoAuth;
        state.loading = false;
        if (payload) state.error = payload.message;
      })

      /* LOGIN */
      .addCase(login.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.authStatus = AuthStatus.NoAuth;
        state.loading = false;
        if (payload) state.error = payload.message;
      })

      /* LOGOUT */
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.user = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) state.error = payload.message;
      });
  },
});

export { checkAuthStatus, login, logout };

export * from './selectors';

export default slice.reducer;
