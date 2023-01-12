import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError } from '~/services/api/api-error';
import * as apiService from '~/services/api/api-service';
import { ThunkOptions, Offer } from '~/types';

export const fetchOffer = createAsyncThunk<Offer, number, ThunkOptions>(
  `${Reducer.Offer}/fetchOne`,
  async (id, { rejectWithValue }) => {
    try {
      const offer = await apiService.findOneOfferById(id);
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
