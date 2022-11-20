import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { toggleFavorite } from '../../api-actions/favorites';
import { State } from './types';
import { addProgress, removeProgress } from './utils';

const initialState: State = {
  favoritesInProgress: [],
  error: null,
};

const slice = createSlice({
  name: Reducer.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* TOGGLE FAVORITE STATUS */
      .addCase(toggleFavorite.pending, (state, { meta }) => {
        state.favoritesInProgress = addProgress(
          state.favoritesInProgress,
          meta.arg.id,
        );

        state.error = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, { meta }) => {
        state.favoritesInProgress = removeProgress(
          state.favoritesInProgress,
          meta.arg.id,
        );

        state.error = null;
      })
      .addCase(toggleFavorite.rejected, (state, { payload, meta }) => {
        state.favoritesInProgress = removeProgress(
          state.favoritesInProgress,
          meta.arg.id,
        );

        state.error = payload as Error;
      });
  },
});

export { toggleFavorite };

export default slice;
