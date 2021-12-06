import { ApiRoute } from '../const';
import ApiError from '../errors';
import {
  offersError,
  offersLoaded,
  offersRequested,
} from './offer-data/action';
import Adapter from '../services/adapter';
import { TThunkAction } from '../types/action';
import { TAuthData } from '../types/auth-data';
import { TOfferServer } from '../types/offer';
import { TUser } from '../types/user';
import {
  checkAuthStatusFailure,
  checkAuthStatusRequest,
  checkAuthStatusSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
} from './user-process/action';

export const checkAuthStatus = (): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(checkAuthStatusRequest());

  apiService.get<TUser>(ApiRoute.Login)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((data) => Adapter.transformUser(data))
    .then((userData) => dispatch(checkAuthStatusSuccess(userData)))
    .catch((err: ApiError) => dispatch(checkAuthStatusFailure(err)));
};

export const fetchOffers = (): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(offersRequested());

  apiService.get<TOfferServer[]>(`${ApiRoute.Hotels}`)
    .then(({ data }) => data.map(Adapter.transformOffer))
    .then((data) => dispatch(offersLoaded(data)))
    .catch((err: ApiError) => dispatch(offersError(err)));
};

export const login = (authData: TAuthData): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(loginRequest());

  apiService.post<TUser>(ApiRoute.Login, authData)
    .then(({ data }) => Adapter.transformUser(data))
    .then((userData) => dispatch(loginSuccess(userData)))
    .catch((err: ApiError) => dispatch(loginFailure(err)));
};
