import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { apiService } from '~/services';
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
      const offer = await apiService.toggleFavoriteStatus(id, status);
      return offer;
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);
