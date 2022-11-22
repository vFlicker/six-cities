import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityName, Reducer, SortType } from '~/constants';
import { AppStatus } from '~/types/app';

import { redirectToRoute } from '../../actions/app';
import { initializeApp } from '../../api-actions/app';

type State = {
  initialize: AppStatus;
  activeCardId: number;
  currentCityName: CityName;
  currentSortType: SortType;
};

const initialState: State = {
  initialize: AppStatus.Idle,
  activeCardId: -1,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
};

const slice = createSlice({
  name: Reducer.App,
  initialState,
  reducers: {
    changeCityName: (state, action: PayloadAction<CityName>) => {
      state.currentCityName = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortType>) => {
      state.currentSortType = action.payload;
    },
    setActiveCardId: (state, action: PayloadAction<number>) => {
      state.activeCardId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      /* INITIALIZE */
      .addCase(initializeApp.pending, (state) => {
        state.initialize = AppStatus.Pending;
      })
      .addCase(initializeApp.fulfilled, (state) => {
        state.initialize = AppStatus.Succeeded;
      })
      .addCase(initializeApp.rejected, (state) => {
        state.initialize = AppStatus.Failed;
      });
  },
});

export { redirectToRoute };

export const { changeCityName, changeSortType, setActiveCardId } =
  slice.actions;

export { initializeApp };

export default slice;
