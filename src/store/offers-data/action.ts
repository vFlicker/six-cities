import { createAction } from '@reduxjs/toolkit';
import { TGroupedOffers } from '../../types/offer';
import ApiError from '../../errors';
import { CityName, SortType } from '../../const';

export enum ActionType {
  ChangeCityName = 'offersData/changeCityName',
  ChangeSortType = 'offersData/changeSortType',
  FetchOffersRequest = 'offersData/fetchOffersRequest',
  FetchOffersSuccess = 'offersData/fetchOffersSuccess',
  FetchOffersFailure = 'offersData/fetchOffersFailure',
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
  (offers: TGroupedOffers) => ({
    payload: offers,
  }),
);

export const offersError = createAction(
  ActionType.FetchOffersFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);
