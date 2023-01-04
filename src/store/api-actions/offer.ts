import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError, apiService } from '~/services';
import { ThunkOptions, Offer } from '~/types';

export const fetchOffer = createAsyncThunk<Offer, number, ThunkOptions>(
  `${Reducer.Offer}/fetchOne`,
  async (id, { rejectWithValue }) => {
    try {
      const offer = await apiService.findOneOfferById(id);
      return offer;
    } catch (error) {
      if (error instanceof ApiError) return rejectWithValue(error);
      throw error;
    }
  },
);
