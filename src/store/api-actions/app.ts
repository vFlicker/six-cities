import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError } from '~/services/api/api-error';
import * as apiService from '~/services/api/api-service';
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
      if (error instanceof ApiError) {
        return rejectWithValue({
          message: error.message,
          statusCode: error.status,
        });
      }

      throw error;
    }
  },
);
