import { createSlice } from '@reduxjs/toolkit';

import { StoreSlice } from '~/shared/libs/state';

import { Offer } from '../types/offerTypes';
import { fetchOffer, fetchOffers, fetchOffersByCityName } from './offerActions';

type OfferState = {
  offer: Offer | null;
  isOfferLoading: boolean;
  offerError: unknown;
  offers: Offer[];
  isOffersLoading: boolean;
  offersError: unknown;
  offersByCityName: Offer[];
  isOffersByCityNameLoading: boolean;
  offersByCityNameError: unknown;
};

const initialState: OfferState = {
  offer: null,
  isOfferLoading: false,
  offerError: null,
  offers: [],
  isOffersLoading: false,
  offersError: null,
  offersByCityName: [],
  isOffersByCityNameLoading: false,
  offersByCityNameError: null,
};

const offerReducer = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
        state.offerError = null;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.isOfferLoading = false;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state, action) => {
        state.isOfferLoading = false;
        state.offerError = action.error;
      })

      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
        state.offersError = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.isOffersLoading = false;
        state.offersError = action.error;
      })

      .addCase(fetchOffersByCityName.pending, (state) => {
        state.isOffersByCityNameLoading = true;
        state.offersByCityNameError = null;
      })
      .addCase(fetchOffersByCityName.fulfilled, (state, action) => {
        state.isOffersByCityNameLoading = false;
        state.offersByCityName = action.payload;
      })
      .addCase(fetchOffersByCityName.rejected, (state, action) => {
        state.isOffersByCityNameLoading = false;
        state.offersByCityNameError = action.error;
      });
  },
});

export default offerReducer.reducer;

export const getOffer = (state: RootState): Offer | null => {
  return state[StoreSlice.Offer].offer;
};

export const getIsOfferLoading = (state: RootState): boolean => {
  return state[StoreSlice.Offer].isOfferLoading;
};

export const getOffers = (state: RootState): Offer[] => {
  return state[StoreSlice.Offer].offers;
};

export const getIsOffersLoading = (state: RootState): boolean => {
  return state[StoreSlice.Offer].isOffersLoading;
};

export const getOffersByCityName = (state: RootState): Offer[] => {
  return state[StoreSlice.Offer].offersByCityName;
};

export const getIsOffersByCityNameLoading = (state: RootState): boolean => {
  return state[StoreSlice.Offer].isOffersByCityNameLoading;
};
