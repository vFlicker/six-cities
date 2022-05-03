import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityName, SortType } from '@/constants';
import { CityName as TCityName, SortType as TSortType } from '@/types';

import { ReducerName } from '../constants';

export type AppState = typeof initialState;

const initialState = {
  activeCardId: -1,
  currentCityName: CityName.AMSTERDAM as TCityName,
  currentSortType: SortType.POPULAR as TSortType,
};

export const appSlice = createSlice({
  name: ReducerName.APP,
  initialState,
  reducers: {
    changeCityName: (state, action: PayloadAction<TCityName>) => {
      state.currentCityName = action.payload;
    },
    changeSortType: (state, action: PayloadAction<TSortType>) => {
      state.currentSortType = action.payload;
    },
    setActiveCard: (state, action: PayloadAction<number>) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { changeCityName, changeSortType, setActiveCard } = appSlice.actions;
