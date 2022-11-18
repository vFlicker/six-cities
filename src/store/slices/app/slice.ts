import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityName, Reducer, SortType } from '~/constants';

import { redirectToRoute } from '../../actions/app';

type State = {
  activeCardId: number;
  currentCityName: CityName;
  currentSortType: SortType;
};

const initialState: State = {
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
});

export { redirectToRoute };

export const { changeCityName, changeSortType, setActiveCardId } =
  slice.actions;

export default slice;
