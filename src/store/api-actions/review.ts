import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { reviewApiService } from '~/services';
import { ThunkOptions, Review, PostReview } from '~/types';
import { errorHandler } from '~/utils';

export const fetchReviews = createAsyncThunk<Review[], number, ThunkOptions>(
  `${Reducer.Review}/fetchReviews`,
  async (id, { rejectWithValue }) => {
    try {
      const reviews = await reviewApiService.findAllById(id);
      return reviews;
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);

export const postReview = createAsyncThunk<Review[], PostReview, ThunkOptions>(
  `${Reducer.Review}/postReview`,
  async (data, { rejectWithValue }) => {
    try {
      const reviews = reviewApiService.create(data);
      return reviews;
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);
