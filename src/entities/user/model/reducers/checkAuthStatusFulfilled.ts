import { PayloadAction } from '@reduxjs/toolkit';

import { User } from '~/shared/types/user';

import { UserState } from '../../types';

export const checkAuthStatusFulfilled = (
  state: UserState,
  { payload }: PayloadAction<User>,
): void => {
  state.authStatus = 'authenticated';
  state.user = payload;
  state.loading = false;
  state.error = null;
};
