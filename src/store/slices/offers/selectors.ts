import { createSelector } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { Error, Offer, OffersDictionary, State } from '~/types';

import { getCurrentCityName, getCurrentSortType } from '../app';
import { sortOffers } from './utils';

const getOffersDictionary = (state: State): OffersDictionary | null => {
  return state[Reducer.Offers].offers;
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
    return offers.length ? sortOffers(offers, sortType) : [];
  },
);

export const getFavorites = (state: State): OffersDictionary => {
  return state[Reducer.Offers].favorites;
};

export const getNearby = (state: State): Offer[] => {
  return state[Reducer.Offers].nearby;
};

export const getLoadingStatus = (state: State): boolean => {
  return state[Reducer.Offers].loading.length !== 0;
};

export const getError = (state: State): Error => {
  return state[Reducer.Offers].error;
};
