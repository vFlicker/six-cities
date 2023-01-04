import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { favoriteApiService } from '~/services';
import { Offer, ThunkOptions, ToggleFavoritePayload } from '~/types';
import { errorHandler } from '~/utils';

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
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);
