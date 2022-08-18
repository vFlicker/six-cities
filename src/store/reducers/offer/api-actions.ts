import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '@/services';
import { apiRoute } from '@/utils';
import { Offer, OfferServer, Review, ReviewServer } from '@/types';

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
      const { data } = await apiService.get<OfferServer>(apiRoute.getOffer(id));
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
    const { data } = await apiService.get<ReviewServer[]>(
      apiRoute.getComments(id),
    );
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
      const { data } = await apiService.post(apiRoute.sendComment(id), {
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

export const changeOfferFavoriteStatus = createAsyncThunk<
  Offer,
  changeOfferFavoriteStatusPayload,
  AsyncThunkOptions
>(
  'offerFavoriteStatus',
  async ({ id, status }, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<OfferServer>(
        apiRoute.changeFavoriteOffer(id, status),
      );
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
