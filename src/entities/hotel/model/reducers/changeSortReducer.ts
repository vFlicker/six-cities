import { PayloadAction } from '@reduxjs/toolkit';

import { HotelsState, Sort } from '../../types';

export const changeSortReducer = (
  state: HotelsState,
  { payload }: PayloadAction<Sort>,
) => {
  state.queryConfig.sort = payload;
};
