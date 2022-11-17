import { createAsyncThunk } from '@reduxjs/toolkit';
import { Reducer } from '~/constants';

import { errorHandler } from '~/services';
import { AsyncThunkOptions, Offer, OfferServer } from '~/types';

type changeFavoriteStatusPayload = {
  id: number;
  status: 0 | 1;
};

export const fetchOffer = createAsyncThunk<Offer, number, AsyncThunkOptions>(
  `${Reducer.Offer}/fetchOne`,
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer>(`/hotels/${id}`);
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const changeFavoriteStatus = createAsyncThunk<
  Offer,
  changeFavoriteStatusPayload,
  AsyncThunkOptions
>(
  `${Reducer.Offer}/changeFavoriteStatus`,
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
