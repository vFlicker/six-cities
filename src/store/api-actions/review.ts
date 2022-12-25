import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler, reviewApiService } from '~/services';
import { ThunkOptions, Review, PostReview } from '~/types';

export const fetchReviews = createAsyncThunk<Review[], number, ThunkOptions>(
  `${Reducer.Review}/fetchReviews`,
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

export const postReview = createAsyncThunk<Review[], PostReview, ThunkOptions>(
  `${Reducer.Review}/postReview`,
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
