import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError, apiService } from '~/services';
import { ThunkOptions, Review, PostReview } from '~/types';

export const fetchReviews = createAsyncThunk<Review[], number, ThunkOptions>(
  `${Reducer.Review}/fetchReviews`,
  async (id, { rejectWithValue }) => {
    try {
      const reviews = await apiService.findAllReviewsByOfferId(id);
      return reviews;
    } catch (error) {
      if (error instanceof ApiError) return rejectWithValue(error);
      throw error;
    }
  },
);

export const postReview = createAsyncThunk<Review[], PostReview, ThunkOptions>(
  `${Reducer.Review}/postReview`,
  async (data, { rejectWithValue }) => {
    try {
      const reviews = apiService.createNewReview(data);
      return reviews;
    } catch (error) {
      if (error instanceof ApiError) return rejectWithValue(error);
      throw error;
    }
  },
);
