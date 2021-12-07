import { APIRoute } from '../const';
import ApiError from '../errors';
import {
  offersError,
  offersLoaded,
  offersRequested,
} from './offers-data/action';
import Adapter from '../services/adapter';
import { dropToken, saveToken } from '../services/token';
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
  logoutFailure,
  logoutRequest,
  logoutSuccess,
} from './user-process/action';

export const checkAuthStatus = (): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(checkAuthStatusRequest());

  apiService.get<TUser>(APIRoute.Login)
    .then(({ data }) => Adapter.transformUser(data))
    .then((userData) => dispatch(checkAuthStatusSuccess(userData)))
    .catch((error: ApiError) => dispatch(checkAuthStatusFailure(error)));
};

export const fetchOffers = (): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(offersRequested());

  apiService.get<TOfferServer[]>(`${APIRoute.Hotels}`)
    .then(({ data }) => data.map(Adapter.transformOffer))
    .then((data) => dispatch(offersLoaded(data)))
    .catch((error: ApiError) => dispatch(offersError(error)));
};

export const login = (authData: TAuthData): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(loginRequest());

  apiService.post<TUser>(APIRoute.Login, authData)
    .then(({ data }) => {
      const { token } = data;
      saveToken(token);

      return data;
    })
    .then((data) => Adapter.transformUser(data))
    .then((userData) => dispatch(loginSuccess(userData)))
    .catch((error: ApiError) => dispatch(loginFailure(error)));
};

export const logout = ():TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(logoutRequest());

  apiService.delete(APIRoute.Logout)
    .then(() => dispatch(logoutSuccess()))
    .then(() => dropToken())
    .catch((error: ApiError) => dispatch(logoutFailure(error)));
};
