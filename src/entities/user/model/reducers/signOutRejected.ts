import { PayloadAction } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/api';

import { State } from '../types';

export const signOutRejected = (
  state: State,
  { payload }: PayloadAction<ApiError | undefined>,
): void => {
  state.loading = false;
  if (payload) state.error = payload;
};
