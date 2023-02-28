import { PayloadAction } from '@reduxjs/toolkit';

import { CityName } from '~/shared/types/hotel';

import { State } from '../types';

export const changeCityFilterReducer = (
  state: State,
  { payload }: PayloadAction<CityName>,
) => {
  state.queryConfig.filter = payload;
};
