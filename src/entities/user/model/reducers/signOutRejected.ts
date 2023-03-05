import { PayloadAction } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/services/api';

import { UserState } from '../../types';

export const signOutRejected = (
  state: UserState,
  { payload }: PayloadAction<ApiError | undefined>,
): void => {
  state.loading = false;
  if (payload) state.error = payload;
};
