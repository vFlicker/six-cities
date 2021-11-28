import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';

import Adapter from '../services/adapter';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  offersError,
  offersLoaded,
  offersRequested,
} from './action';
import { ApiRoute } from '../const';
import ApiError from '../errors';
import { TState } from './reducer';
import { TAuthData, TOfferServer, TUser } from '../types';

export type TDispatch = ThunkDispatch<TState, AxiosInstance, Action>;
export type TThunk = ThunkAction<void, TState, AxiosInstance, Action>;

export const fetchOffers = (): TThunk => (dispatch, _getState, apiService) => {
  dispatch(offersRequested());

  apiService.get<TOfferServer[]>(`${ApiRoute.HOTELS}`)
    .then(({ data }) => data.map(Adapter.transformOffer))
    .then((data) => dispatch(offersLoaded(data)))
    .catch((err: ApiError) => dispatch(offersError(err)));
};

export const login = (authData: TAuthData): TThunk => (dispatch, _getState, apiService) => {
  dispatch(loginRequest());

  apiService.post<TUser>(ApiRoute.LOGIN, authData)
    .then(({ data }) => Adapter.transformUser(data))
    .then((userData) => dispatch(loginSuccess(userData)))
    .catch((err: ApiError) => dispatch(loginFailure(err)));
};
