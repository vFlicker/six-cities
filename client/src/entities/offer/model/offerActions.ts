import { createAsyncThunk } from '@reduxjs/toolkit';

import { StoreSlice } from '~/shared/libs/state';
import { ThunkOptions } from '~/shared/libs/state';

import { offerApi } from '../api/offersApi';
import { Offer } from '../types/offerTypes';

export const fetchOffer = createAsyncThunk<Offer, string, ThunkOptions>(
  `${StoreSlice.Offer}/fetchOffer`,
  async (id) => {
    const offer = await offerApi.getOfferById(id);
    return offer;
  },
);

export const fetchOffers = createAsyncThunk<Offer[], void, ThunkOptions>(
  `${StoreSlice.Offer}/fetchOffers`,
  async () => {
    const offers = await offerApi.getAllOffers();
    return offers;
  },
);

export const fetchOffersByCityName = createAsyncThunk<
  Offer[],
  string,
  ThunkOptions
>(`${StoreSlice.Offer}/fetchOffersByCityName`, async (cityName) => {
  const offers = await offerApi.getAllOffersByCityName(cityName);
  return offers;
});
