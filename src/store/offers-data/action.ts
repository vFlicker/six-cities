import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../../types/offer';
import ApiError from '../../errors';
import { CityName, SortType } from '../../const';

export enum ActionType {
  ChangeCityName = 'offerData/changeCityName',
  ChangeSortType = 'offerData/changeSortType',
  FetchOffersRequest = 'offerData/fetchOffersRequest',
  FetchOffersSuccess = 'offerData/fetchOffersSuccess',
  FetchOffersFailure = 'offerData/fetchOffersFailure',
}

export const changeCityName = createAction(
  ActionType.ChangeCityName,
  (cityName: CityName) => ({
    payload: cityName,
  }),
);

export const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: SortType) => ({
    payload: sortType,
  }),
);

export const offersRequested = createAction(ActionType.FetchOffersRequest);

export const offersLoaded = createAction(
  ActionType.FetchOffersSuccess,
  (offers: TOffers) => ({
    payload: offers,
  }),
);

export const offersError = createAction(
  ActionType.FetchOffersFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);
