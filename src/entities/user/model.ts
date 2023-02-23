import { createSlice } from '@reduxjs/toolkit';

import { User } from '~/shared/types';

type AuthStatus = 'authenticated' | 'unauthenticated' | 'unknown';

type State = {
  authStatus: AuthStatus;
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  authStatus: 'unknown',
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// actions

export const userReducer = userSlice.reducer;

export const selectUser = (state: RootState): User | null => {
  return state.USER.user;
};

export const selectIsUserAuthenticated = (state: RootState): boolean => {
  return state.USER.authStatus === 'authenticated';
};