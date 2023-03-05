import { PayloadAction } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/services/api';

import { UserState } from '../../types';

export const loginRejected = (
  state: UserState,
  { payload }: PayloadAction<ApiError | undefined>,
): void => {
  state.authStatus = 'unauthenticated';
  state.loading = false;
  if (payload) state.error = payload;
};
