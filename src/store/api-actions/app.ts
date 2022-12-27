import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler, favoriteApiService } from '~/services';
import { Offer, ThunkOptions, ToggleFavoritePayload } from '~/types';

export const toggleFavorite = createAsyncThunk<
  Offer,
  ToggleFavoritePayload,
  ThunkOptions
>(
  `${Reducer.App}/toggleFavoriteStatus`,
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const hotel = await favoriteApiService.toggleStatus(id, status);
      return hotel;
    } catch (err) {
      errorHandler(err as Error);
      return rejectWithValue(err as Error);
    }
  },
);
