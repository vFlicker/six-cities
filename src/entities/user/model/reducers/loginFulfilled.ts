import { PayloadAction } from '@reduxjs/toolkit';

import { User } from '~/shared/types';

import { State } from '../types';

export const loginFulfilled = (
  state: State,
  { payload }: PayloadAction<User>,
): void => {
  state.authStatus = 'authenticated';
  state.user = payload;
  state.loading = false;
  state.error = null;
};
