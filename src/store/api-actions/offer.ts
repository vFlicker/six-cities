import { createAsyncThunk } from '@reduxjs/toolkit';
import { Reducer } from '~/constants';

import { errorHandler } from '~/services';
import { AsyncThunkOptions, Offer, OfferServer } from '~/types';

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
