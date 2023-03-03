import { createSlice } from '@reduxjs/toolkit';

import { login, signOut } from '~/shared/apiActions';
import { User } from '~/shared/types/user';

import { UserState } from '../types';
import {
  loginFulfilled,
  loginPending,
  loginRejected,
  signOutFulfilled,
  signOutPending,
  signOutRejected,
} from './reducers';

const initialState: UserState = {
  authStatus: 'unknown',
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* LOGIN */
      .addCase(login.pending, loginPending)
      .addCase(login.fulfilled, loginFulfilled)
      .addCase(login.rejected, loginRejected)

      /* SIGN OUT */
      .addCase(signOut.pending, signOutPending)
      .addCase(signOut.fulfilled, signOutFulfilled)
      .addCase(signOut.rejected, signOutRejected);
  },
});

// actions

export default userSlice.reducer;

export const selectUser = (state: RootState): User | null => {
  return state.USER.user;
};

export const selectIsAuthenticated = (state: RootState): boolean => {
  return state.USER.authStatus === 'authenticated';
};
