import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { ThunkOptions, Review, ReviewServer } from '~/types';

type PostCommentPayload = {
  id: number;
  comment: string;
  rating: number;
};

export const fetchComments = createAsyncThunk<Review[], number, ThunkOptions>(
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
  ThunkOptions
>(
  `${Reducer.Comments}/postComment`,
  async ({ id, ...review }, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<ReviewServer[]>(
        `/comments/${id}`,
        review,
      );

      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
