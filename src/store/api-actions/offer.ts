import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { hotelApiService } from '~/services';
import { ThunkOptions, Offer } from '~/types';
import { errorHandler } from '~/utils';

export const fetchOffer = createAsyncThunk<Offer, number, ThunkOptions>(
  `${Reducer.Offer}/fetchOne`,
  async (id, { rejectWithValue }) => {
    try {
      const hotel = await hotelApiService.findOneById(id);
      return hotel;
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);
