import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler, reviewApiService } from '~/services';
import { ThunkOptions, Review, PostReview } from '~/types';

export const fetchComments = createAsyncThunk<Review[], number, ThunkOptions>(
  `${Reducer.Comments}/fetchComments`,
  async (id, { rejectWithValue }) => {
    try {
      const reviews = await reviewApiService.findAllById(id);
      return reviews;
    } catch (err) {
      errorHandler(err as Error);
      return rejectWithValue(err as Error);
    }
  },
);

export const postComment = createAsyncThunk<Review[], PostReview, ThunkOptions>(
  `${Reducer.Comments}/postComment`,
  async (data, { rejectWithValue }) => {
    try {
      const reviews = reviewApiService.create(data);
      return reviews;
    } catch (err) {
      errorHandler(err as Error);
      return rejectWithValue(err as Error);
    }
  },
);
