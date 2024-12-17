import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllOffers,
  getAllOffersByCityName,
  getOfferById,
} from '../api/offersApi';
import { Offer } from '../types';

type ThunkOptions = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: unknown;
};

export const fetchOffer = createAsyncThunk<Offer, string, ThunkOptions>(
  'OFFER/fetchOffer',
  async (id) => {
    const offer = await getOfferById(id);
    return offer;
  },
);

export const fetchOffers = createAsyncThunk<Offer[], void, ThunkOptions>(
  'OFFER/fetchOffers',
  async () => {
    const offers = await getAllOffers();
    return offers;
  },
);

export const fetchOffersByCityName = createAsyncThunk<
  Offer[],
  string,
  ThunkOptions
>('OFFER/fetchOffersByCityName', async (cityName) => {
  const offers = await getAllOffersByCityName(cityName);
  return offers;
});
