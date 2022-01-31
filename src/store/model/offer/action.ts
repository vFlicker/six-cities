import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from '../../../const';
import ApiError from '../../../errors';
import { Adapter } from '../../../services';
import { AsyncThunkOptions } from '../../../types/action';
import { TOffer, TOfferServer } from '../../../types/offer';

export const fetchOffer = createAsyncThunk<TOffer, number, AsyncThunkOptions>(
  'offer',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOfferServer>(`${APIRoute.Offers}/${id}`);

      return Adapter.transformOffer(data);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
