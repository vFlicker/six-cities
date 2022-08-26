import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '~/services';
import { Offer, OfferServer, Review, ReviewServer } from '~/types';

import { AsyncThunkOptions } from '../types';

type SendCommentPayload = {
  id: number;
  comment: string;
  rating: number;
};

type changeOfferFavoriteStatusPayload = {
  id: number;
  status: 0 | 1;
};

export const fetchOffer = createAsyncThunk<Offer, number, AsyncThunkOptions>(
  'offer',
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

export const changeOfferFavoriteStatus = createAsyncThunk<
  Offer,
  changeOfferFavoriteStatusPayload,
  AsyncThunkOptions
>(
  'offerFavoriteStatus',
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

// TODO: use normal naming for actions
export const fetchComments = createAsyncThunk<
  Review[],
  number,
  AsyncThunkOptions
>('comment', async (id, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<ReviewServer[]>(`/comments/${id}`);
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});

export const sendComment = createAsyncThunk<
  number,
  SendCommentPayload,
  AsyncThunkOptions
>(
  'sendComment',
  async ({ id, comment, rating }, { extra: apiService, rejectWithValue }) => {
    try {
      // TODO: data is any
      const { data } = await apiService.post(`/comments/${id}`, {
        comment,
        rating,
      });
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
