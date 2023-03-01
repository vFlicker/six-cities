import { PayloadAction } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/api';

import { HotelsState } from '../../types';

export const fetchAllHotelsRejected = (
  state: HotelsState,
  { payload }: PayloadAction<ApiError | undefined>,
): void => {
  state.loading = false;
  if (payload) state.error = payload;
};
