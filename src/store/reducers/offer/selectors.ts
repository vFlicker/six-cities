import { createSelector } from '@reduxjs/toolkit';

import { ErrorType, Offer, OffersDictionary, Review, RootState } from '~/types';

import { ReducerName } from '../../constants';
import { getCurrentCityName, getCurrentSortType } from '../app';
import { sortOffers } from './utils';

const getOffersDictionary = (state: RootState): OffersDictionary => {
  return state[ReducerName.OFFER].offers;
};

const getFilteredOffers = createSelector(
  getOffersDictionary,
  getCurrentCityName,
  (offers, cityName) => {
    return offers ? offers[cityName.toLocaleLowerCase()] : [];
  },
);

export const getOffers = createSelector(
  getFilteredOffers,
  getCurrentSortType,
  (offers, sortType) => {
    return offers ? sortOffers(offers, sortType) : null;
  },
);

export const getOffer = (state: RootState): Offer | null => {
  return state[ReducerName.OFFER].offer;
};

export const getFavorites = (state: RootState): OffersDictionary => {
  return state[ReducerName.OFFER].favorites;
};

export const getComments = (state: RootState): Review[] => {
  return state[ReducerName.OFFER].comments;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[ReducerName.OFFER].loading;
};

export const getError = (state: RootState): ErrorType => {
  return state[ReducerName.OFFER].error;
};
