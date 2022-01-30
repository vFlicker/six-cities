import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityName, ReducerName, SortType } from '../../../const';
import { AppState } from '../../../types/state';

const initialState: AppState = {
  activeCardId: -1,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
};

export const appSlice = createSlice({
  name: ReducerName.App,
  initialState,
  reducers: {
    changeCityName: (state, action: PayloadAction<CityName>) => {
      state.currentCityName = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortType>) => {
      state.currentSortType = action.payload;
    },
    setActiveCard: (state, action: PayloadAction<number>) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { changeCityName, changeSortType, setActiveCard } = appSlice.actions;
