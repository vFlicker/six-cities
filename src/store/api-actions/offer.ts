import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler, hotelApiService } from '~/services';
import { ThunkOptions, Offer } from '~/types';

export const fetchOffer = createAsyncThunk<Offer, number, ThunkOptions>(
  `${Reducer.Offer}/fetchOne`,
  async (id, { rejectWithValue }) => {
    try {
      const hotel = await hotelApiService.findOneById(id);
      return hotel;
    } catch (err) {
      errorHandler(err as Error);
      return rejectWithValue(err as Error);
    }
  },
);
