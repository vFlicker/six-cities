import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '@/services';
import { getApiRoute } from '@/utils';
import {
  Offer,
  OfferServer,
  Review,
  ReviewServer,
} from '@/types';

import { AsyncThunkOptions } from '../types';

type SendCommentPayload = {
  id: number;
  comment: string;
  rating: number;
}

export const fetchOffer = createAsyncThunk<Offer, number, AsyncThunkOptions>(
  'offer',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer>(getApiRoute.offer(id));
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

// TODO: use normal naming for actions
export const fetchComments = createAsyncThunk<Review[], number, AsyncThunkOptions>(
  'comment',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<ReviewServer[]>(getApiRoute.comments(id));
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const sendComment = createAsyncThunk<undefined, SendCommentPayload, AsyncThunkOptions>(
  'sendComment',
  async ({ id, comment, rating }, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post(getApiRoute.comments(id), { comment, rating });
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
