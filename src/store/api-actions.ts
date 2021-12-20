import { APIRoute, AppRoute } from '../const';
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
  redirectToRoute,
} from './user-process/action';
import { getGroupedOffers } from '../utils/offers';

export const checkAuthStatus = (): TThunkAction => async (dispatch, _getState, apiService) => {
  dispatch(checkAuthStatusRequest());

  try {
    const { data } = await apiService.get<TUser>(APIRoute.Login);
    const transformedData = await Adapter.transformUser(data);

    dispatch(checkAuthStatusSuccess());
    dispatch(loginSuccess(transformedData));
  } catch (error) {
    checkAuthStatusFailure(error as ApiError);
  }
};

export const fetchOffers = (): TThunkAction => async (dispatch, _getState, apiService) => {
  dispatch(offersRequested());

  try {
    const { data } = await apiService.get<TOfferServer[]>(`${APIRoute.Hotels}`);
    const transformedData = await data.map(Adapter.transformOffer);
    const groupedOffers = await getGroupedOffers(transformedData);

    dispatch(offersLoaded(groupedOffers));
  } catch (error) {
    dispatch(offersError(error as ApiError));
  }
};

export const login = (authData: TAuthData): TThunkAction => async (
  dispatch,
  _getState,
  apiService,
) => {
  dispatch(loginRequest());

  try {
    const { data } = await apiService.post<TUser>(APIRoute.Login, authData);
    const transformedData = await Adapter.transformUser(data);
    const { token } = data;

    saveToken(token);
    dispatch(loginSuccess(transformedData));
    dispatch(redirectToRoute(AppRoute.Root));
  } catch (error) {
    dispatch(loginFailure(error as ApiError));
  }
};

export const logout = ():TThunkAction => async (dispatch, _getState, apiService) => {
  dispatch(logoutRequest());

  try {
    await apiService.delete(APIRoute.Logout);

    dropToken();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error as ApiError));
  }
};
