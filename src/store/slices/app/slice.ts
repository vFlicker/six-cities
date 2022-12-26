import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AppStatus,
  CityName,
  NO_ACTIVE_CARD,
  Reducer,
  SortType,
} from '~/constants';

import { redirectToRoute } from '../../actions/app';
import { initializeApp, toggleFavorite } from '../../api-actions/app';
import { State } from './types';
import { addIdToInIdsProgress, removeIdFromInIdsProgress } from './utils';

const initialState: State = {
  initialize: AppStatus.Idle,
  activeCardId: NO_ACTIVE_CARD,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
  favoriteIdsInProgress: [],
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
        state.favoriteIdsInProgress = addIdToInIdsProgress(
          state.favoriteIdsInProgress,
          meta.arg.id,
        );

        state.error = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, { meta }) => {
        state.favoriteIdsInProgress = removeIdFromInIdsProgress(
          state.favoriteIdsInProgress,
          meta.arg.id,
        );

        state.error = null;
      })
      .addCase(toggleFavorite.rejected, (state, { payload, meta }) => {
        state.favoriteIdsInProgress = removeIdFromInIdsProgress(
          state.favoriteIdsInProgress,
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
