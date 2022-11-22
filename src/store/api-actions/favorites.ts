import { createAsyncThunk } from '@reduxjs/toolkit';

import { FavoriteStatus, Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { ThunkOptions, Offer, OfferServer } from '~/types';

type ToggleFavoritePayload = {
  id: number;
  status: FavoriteStatus;
};

export const toggleFavorite = createAsyncThunk<
  Offer,
  ToggleFavoritePayload,
  ThunkOptions
>(
  `${Reducer.Favorites}/toggleFavoriteStatus`,
  async ({ id, status }, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<OfferServer>(
        `/favorite/${id}/${status}`,
      );

      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
