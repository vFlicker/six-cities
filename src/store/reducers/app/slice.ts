import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityName, SortType } from '~/constants';
import { SortType as TSortType } from '~/types';

import { ReducerName } from '../../constants';

const initialState = {
  activeCardId: -1,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.POPULAR as TSortType,
};

const slice = createSlice({
  name: ReducerName.APP,
  initialState,
  reducers: {
    changeCityName: (state, action: PayloadAction<CityName>) => {
      state.currentCityName = action.payload;
    },
    changeSortType: (state, action: PayloadAction<TSortType>) => {
      state.currentSortType = action.payload;
    },
    setActiveCardId: (state, action: PayloadAction<number>) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { changeCityName, changeSortType, setActiveCardId } =
  slice.actions;
export default slice;
