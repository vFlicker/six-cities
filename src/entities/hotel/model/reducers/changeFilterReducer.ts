import { PayloadAction } from '@reduxjs/toolkit';

import { CityName } from '~/shared/types/hotel';

import { HotelsState } from '../../types';

export const changeFilterReducer = (
  state: HotelsState,
  { payload }: PayloadAction<CityName>,
) => {
  state.queryConfig.filter = payload;
};
