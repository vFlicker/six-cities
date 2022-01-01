import { APIRoute, AppRoute } from '../const';
import ApiError from '../errors';
import { offerError, offerLoaded, offerRequested } from './offer-data/actions';
import { offersError, offersLoaded, offersRequested } from './offers-data/action';
import { offersNearbyError, offersNearbyLoaded, offersNearbyRequested } from './offers-nearby-data/actions';
import Adapter from '../services/adapter';
import { dropToken, saveToken } from '../services/token';
import { TThunkAction } from '../types/action';
import { TAuthData } from '../types/auth-data';
import { TOfferServer, TOffersServer } from '../types/offer';
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
    const transformedData = Adapter.transformUser(data);

    dispatch(checkAuthStatusSuccess());
    dispatch(loginSuccess(transformedData));
  } catch (error) {
    checkAuthStatusFailure(error as ApiError);
  }
};

export const fetchOffer = (id: number): TThunkAction => async (dispatch, _getState, apiService) => {
  dispatch(offerRequested());

  try {
    const { data } = await apiService.get<TOfferServer>(`${APIRoute.Offers}/${id}`);
    const transformedData = Adapter.transformOffer(data);

    dispatch(offerLoaded(transformedData));
  } catch (error) {
    dispatch(offerError(error as ApiError));
  }
};

export const fetchOffers = (): TThunkAction => async (dispatch, _getState, apiService) => {
  dispatch(offersRequested());

  try {
    const { data } = await apiService.get<TOffersServer>(`${APIRoute.Offers}`);
    const transformedData = data.map(Adapter.transformOffer);
    const groupedOffers = getGroupedOffers(transformedData);

    dispatch(offersLoaded(groupedOffers));
  } catch (error) {
    dispatch(offersError(error as ApiError));
  }
};

export const fetchOfferNearby = (id: number): TThunkAction => async (
  dispatch,
  _getState,
  apiService,
) => {
  dispatch(offersNearbyRequested());

  try {
    const { data } = await apiService.get<TOffersServer>(`${APIRoute.Offers}/${id}/nearby`);
    const transformedData = data.map(Adapter.transformOffer);

    dispatch(offersNearbyLoaded(transformedData));
  } catch (error) {
    dispatch(offersNearbyError(error as ApiError));
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
    const transformedData = Adapter.transformUser(data);
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
