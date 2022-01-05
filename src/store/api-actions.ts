import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../const';
import ApiError from '../errors';
import Adapter from '../services/adapter';
import { dropToken, saveToken } from '../services/token';
import { TAsyncThunkOptions } from '../types/action';
import { TAuthData } from '../types/auth-data';
import {
  TGroupedOffers,
  TOffer,
  TOffers,
  TOfferServer,
  TOffersServer,
} from '../types/offer';
import { TUser } from '../types/user';
import { loginSuccess, redirectToRoute } from './user-process/action';
import { getGroupedOffers } from '../utils/offers';

export const checkAuthStatus = createAsyncThunk<TUser, void, TAsyncThunkOptions>(
  'authStatus',
  async (_, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TUser>(APIRoute.Login);
      const transformedData = Adapter.transformUser(data);

      dispatch(loginSuccess(transformedData));

      return Adapter.transformUser(data);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const fetchOffersFavorite = createAsyncThunk<TOffers, void, TAsyncThunkOptions>(
  'offersFavorite',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOffersServer>(`${APIRoute.Favorite}`);

      return data.map(Adapter.transformOffer);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const fetchOffer = createAsyncThunk<TOffer, number, TAsyncThunkOptions>(
  'offer',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOfferServer>(`${APIRoute.Offers}/${id}`);

      return Adapter.transformOffer(data);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const fetchOffers = createAsyncThunk<TGroupedOffers, void, TAsyncThunkOptions>(
  'offers',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOffersServer>(`${APIRoute.Offers}`);
      const transformedData = data.map(Adapter.transformOffer);

      return getGroupedOffers(transformedData);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const fetchOfferNearby = createAsyncThunk<TOffers, number, TAsyncThunkOptions>(
  'offerNearby',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOffersServer>(`${APIRoute.Offers}/${id}/nearby`);

      return data.map(Adapter.transformOffer);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const login = createAsyncThunk<TUser, TAuthData, TAsyncThunkOptions>(
  'userData',
  async (authData, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<TUser>(APIRoute.Login, authData);
      const transformedData = Adapter.transformUser(data);
      const { token } = data;

      saveToken(token);
      dispatch(redirectToRoute(AppRoute.Root));

      return transformedData;
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const logout = createAsyncThunk<void, void, TAsyncThunkOptions>(
  'userData',
  async (authData, { extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete(APIRoute.Logout);

      return dropToken();
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
