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
import Adapter from '../services/adapter';
import { TThunkAction } from '../types/action';
import { TAuthData } from '../types/auth-data';
import { TOfferServer } from '../types/offer';
import { TUser } from '../types/user';

export const fetchOffers = (): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(offersRequested());

  apiService.get<TOfferServer[]>(`${ApiRoute.HOTELS}`)
    .then(({ data }) => data.map(Adapter.transformOffer))
    .then((data) => dispatch(offersLoaded(data)))
    .catch((err: ApiError) => dispatch(offersError(err)));
};

export const login = (authData: TAuthData): TThunkAction => (dispatch, _getState, apiService) => {
  dispatch(loginRequest());

  apiService.post<TUser>(ApiRoute.LOGIN, authData)
    .then(({ data }) => Adapter.transformUser(data))
    .then((userData) => dispatch(loginSuccess(userData)))
    .catch((err: ApiError) => dispatch(loginFailure(err)));
};
