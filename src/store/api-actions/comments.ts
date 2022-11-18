import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { AsyncThunkOptions, Review, ReviewServer } from '~/types';

type PostCommentPayload = {
  id: number;
  comment: string;
  rating: number;
};

export const fetchComments = createAsyncThunk<
  Review[],
  number,
  AsyncThunkOptions
>(
  `${Reducer.Comments}/fetchComments`,
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<ReviewServer[]>(`/comments/${id}`);
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const postComment = createAsyncThunk<
  Review[],
  PostCommentPayload,
  AsyncThunkOptions
>(
  `${Reducer.Comments}/postComment`,
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
