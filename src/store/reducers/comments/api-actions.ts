import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '~/services';
import { AsyncThunkOptions, Review, ReviewServer } from '~/types';

type AddCommentPayload = {
  id: number;
  comment: string;
  rating: number;
};

export const fetchComments = createAsyncThunk<
  Review[],
  number,
  AsyncThunkOptions
>('offer/fetchComments', async (id, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<ReviewServer[]>(`/comments/${id}`);
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});

export const addComment = createAsyncThunk<
  Review[],
  AddCommentPayload,
  AsyncThunkOptions
>(
  'offer/addComment',
  async ({ id, ...payload }, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<ReviewServer[]>(
        `/comments/${id}`,
        payload,
      );

      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
