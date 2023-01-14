import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError } from '~/services/api/api-error';
import * as apiService from '~/services/api/api-service';
import { Review, PostReview } from '~/types/review';
import { ThunkOptions } from '~/types/store';

export const fetchReviews = createAsyncThunk<Review[], number, ThunkOptions>(
  `${Reducer.Review}/fetchReviews`,
  async (id, { rejectWithValue }) => {
    try {
      const reviews = await apiService.findAllReviewsByOfferId(id);
      return reviews;
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue({
          message: error.message,
          statusCode: error.status,
        });
      }

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
      if (error instanceof ApiError) {
        return rejectWithValue({
          message: error.message,
          statusCode: error.status,
        });
      }

      throw error;
    }
  },
);
