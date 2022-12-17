import { makeError, makeOffer } from '~/utils';

import { toggleFavorite } from '../app';
import { logout } from '../user';
import offersSlice, {
  fetchAllOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from './slice';
import { State } from './types';

const initialState: State = {
  all: [],
  favorites: [],
  nearby: [],
  loading: false,
  error: null,
};

const offers = [makeOffer()];
const error = makeError();

describe('Slice: offers', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(offersSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  describe('fetchAllOffers', () => {
    it('should update loading to "true" when fetchAllOffers pending', () => {
      const ACTION_TYPE = { type: fetchAllOffers.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add offers when fetchAllOffers is fulfilled', () => {
      const ACTION_TYPE = {
        type: fetchAllOffers.fulfilled.type,
        payload: offers,
      };

      const initialState: State = {
        all: [],
        favorites: [],
        nearby: [],
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        all: offers,
        loading: false,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when fetchAllOffers is rejected', () => {
      const ACTION_TYPE = {
        type: fetchAllOffers.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when fetchAllOffers is pending or fulfilled', () => {
      const initialState: State = {
        all: [],
        favorites: [],
        nearby: [],
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: fetchAllOffers.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(offersSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: fetchAllOffers.fulfilled.type,
        payload: offers,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        all: offers,
        error: null,
      };

      expect(offersSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('fetchFavoriteOffers', () => {
    it('should update loading to "true" when fetchFavoriteOffers pending', () => {
      const ACTION_TYPE = { type: fetchFavoriteOffers.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add offers when fetchFavoriteOffers is fulfilled', () => {
      const ACTION_TYPE = {
        type: fetchFavoriteOffers.fulfilled.type,
        payload: offers,
      };

      const initialState: State = {
        all: [],
        favorites: [],
        nearby: [],
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        favorites: offers,
        loading: false,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when fetchFavoriteOffers is rejected', () => {
      const ACTION_TYPE = {
        type: fetchFavoriteOffers.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when fetchFavoriteOffers is pending or fulfilled', () => {
      const initialState: State = {
        all: [],
        favorites: [],
        nearby: [],
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: fetchFavoriteOffers.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(offersSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: fetchFavoriteOffers.fulfilled.type,
        payload: offers,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        favorites: offers,
        error: null,
      };

      expect(offersSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('fetchOffersNearby', () => {
    it('should update loading to "true" when fetchOffersNearby pending', () => {
      const ACTION_TYPE = { type: fetchOffersNearby.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add offers when fetchOffersNearby is fulfilled', () => {
      const ACTION_TYPE = {
        type: fetchOffersNearby.fulfilled.type,
        payload: offers,
      };

      const initialState: State = {
        all: [],
        favorites: [],
        nearby: [],
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        nearby: offers,
        loading: false,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when fetchOffersNearby is rejected', () => {
      const ACTION_TYPE = {
        type: fetchOffersNearby.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when fetchOffersNearby is pending or fulfilled', () => {
      const initialState: State = {
        all: [],
        favorites: [],
        nearby: [],
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: fetchOffersNearby.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(offersSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: fetchOffersNearby.fulfilled.type,
        payload: offers,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        nearby: offers,
        error: null,
      };

      expect(offersSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('toggleFavorite', () => {
    it('should update offers when toggleFavorite is fulfilled', () => {
      const firstOffer = makeOffer({ isFavorite: false });
      const secondOffer = makeOffer({ isFavorite: false });
      const offers = [firstOffer, secondOffer];
      const updatedSecondOffer = { ...secondOffer, isFavorite: true };
      const updatedOffers = [firstOffer, updatedSecondOffer];

      const initialState: State = {
        all: offers,
        favorites: [],
        nearby: offers,
        loading: false,
        error: null,
      };

      const ACTION_TYPE = {
        type: toggleFavorite.fulfilled.type,
        payload: updatedSecondOffer,
      };

      const updatedState: State = {
        ...initialState,
        all: updatedOffers,
        favorites: [updatedSecondOffer],
        nearby: updatedOffers,
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });
  });

  describe('logout', () => {
    it('should remove favorites when action logout is fulfilled', () => {
      const offers = [makeOffer({ isFavorite: true })];

      const initialState: State = {
        all: offers,
        favorites: offers,
        nearby: offers,
        loading: false,
        error: null,
      };

      const ACTION_TYPE = { type: logout.fulfilled.type };

      const updatedState: State = {
        ...initialState,
        favorites: [],
      };

      expect(offersSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });
  });
});
