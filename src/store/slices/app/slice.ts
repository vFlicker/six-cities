import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityName, Reducer, SortType } from '~/constants';
import { OfferID } from '~/types';
import { AppStatus } from '~/types/app';

import { redirectToRoute } from '../../actions/app';
import { initializeApp, toggleFavorite } from '../../api-actions/app';
import { addToInProgress, removeFromInProgress } from './utils';

type State = {
  initialize: AppStatus;
  activeCardId: number;
  currentCityName: CityName;
  currentSortType: SortType;
  favoriteIDsInProgress: OfferID[];
  error: Error | null;
};

const initialState: State = {
  initialize: AppStatus.Idle,
  activeCardId: -1,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
  favoriteIDsInProgress: [],
  error: null,
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
      })

      /* TOGGLE FAVORITE STATUS */
      .addCase(toggleFavorite.pending, (state, { meta }) => {
        state.favoriteIDsInProgress = addToInProgress(
          state.favoriteIDsInProgress,
          meta.arg.id,
        );

        state.error = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, { meta }) => {
        state.favoriteIDsInProgress = removeFromInProgress(
          state.favoriteIDsInProgress,
          meta.arg.id,
        );

        state.error = null;
      })
      .addCase(toggleFavorite.rejected, (state, { payload, meta }) => {
        state.favoriteIDsInProgress = removeFromInProgress(
          state.favoriteIDsInProgress,
          meta.arg.id,
        );

        state.error = payload as Error;
      });
  },
});

export { redirectToRoute };

export const { changeCityName, changeSortType, setActiveCardId } =
  slice.actions;

export { initializeApp, toggleFavorite };

export default slice;
