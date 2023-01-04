import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { apiService } from '~/services';
import { ThunkOptions, Offer } from '~/types';
import { errorHandler } from '~/utils';

export const fetchOffer = createAsyncThunk<Offer, number, ThunkOptions>(
  `${Reducer.Offer}/fetchOne`,
  async (id, { rejectWithValue }) => {
    try {
      const offer = await apiService.findOneOfferById(id);
      return offer;
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);
