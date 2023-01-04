import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError, apiService } from '~/services';
import { Offer, ThunkOptions, ToggleFavoritePayload } from '~/types';

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
      if (error instanceof ApiError) return rejectWithValue(error);
      throw error;
    }
  },
);
