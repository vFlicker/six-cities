import { error, makeOffer } from '~/utils';

import { toggleFavorite } from '../../api-actions/app';
import { logout } from '../../api-actions/user';
import offersReducer, {
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

const loadingState = {
  ...initialState,
  loading: true,
};

const rejectedState: State = {
  ...initialState,
  error,
};

const offer = makeOffer({ isFavorite: true });
const updatedOffer = { ...offer, isFavorite: false };
const offers = [offer];
const updatedOffers = [updatedOffer];

describe('Slice: offers', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(offersReducer(undefined, actionType)).toEqual(initialState);
  });

  describe('fetchAllOffers', () => {
    it('should return a state with updated the loading status when fetchAllOffers is pending', () => {
      const actionType = { type: fetchAllOffers.pending.type };

      const result = offersReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with updated the loading status when fetchAllOffers is fulfilled', () => {
      const actionType = {
        type: fetchAllOffers.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated all offers when fetchAllOffers is fulfilled', () => {
      const actionType = {
        type: fetchAllOffers.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.all).toEqual(offers);
    });

    it('should return a state with added error when fetchAllOffers is rejected', () => {
      const actionType = {
        type: fetchAllOffers.rejected.type,
        payload: error,
      };

      const result = offersReducer(initialState, actionType);
      expect(result.error).toEqual(error);
    });

    it('should return a state with removed error when fetchAllOffers is pending', () => {
      const actionType = {
        type: fetchAllOffers.pending.type,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when fetchAllOffers is fulfilled', () => {
      const actionType = {
        type: fetchAllOffers.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('fetchFavoriteOffers', () => {
    it('should return a state with updated the loading status when fetchFavoriteOffers is pending', () => {
      const actionType = { type: fetchFavoriteOffers.pending.type };

      const result = offersReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with updated the loading status when fetchFavoriteOffers is fulfilled', () => {
      const actionType = {
        type: fetchFavoriteOffers.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated favorite offers when fetchFavoriteOffers is fulfilled', () => {
      const actionType = {
        type: fetchFavoriteOffers.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.favorites).toEqual(offers);
    });

    it('should return a state with added error when fetchFavoriteOffers is rejected', () => {
      const actionType = {
        type: fetchFavoriteOffers.rejected.type,
        payload: error,
      };

      const result = offersReducer(initialState, actionType);
      expect(result.error).toEqual(error);
    });

    it('should return a state with removed error when fetchFavoriteOffers is pending', () => {
      const actionType = {
        type: fetchFavoriteOffers.pending.type,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when fetchFavoriteOffers is fulfilled', () => {
      const actionType = {
        type: fetchFavoriteOffers.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('fetchOffersNearby', () => {
    it('should return a state with updated the loading status when fetchOffersNearby is pending', () => {
      const actionType = { type: fetchOffersNearby.pending.type };

      const result = offersReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with updated the loading status when fetchOffersNearby is fulfilled', () => {
      const actionType = {
        type: fetchOffersNearby.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated offers nearby when fetchOffersNearby is fulfilled', () => {
      const actionType = {
        type: fetchOffersNearby.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.nearby).toEqual(offers);
    });

    it('should return a state with added error when fetchOffersNearby is rejected', () => {
      const actionType = {
        type: fetchOffersNearby.rejected.type,
        payload: error,
      };

      const result = offersReducer(initialState, actionType);
      expect(result.error).toEqual(error);
    });

    it('should return a state with removed error when fetchOffersNearby is pending', () => {
      const actionType = {
        type: fetchOffersNearby.pending.type,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when fetchOffersNearby is fulfilled', () => {
      const actionType = {
        type: fetchOffersNearby.fulfilled.type,
        payload: offers,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('toggleFavorite', () => {
    it('should return a state with updated all offers when toggleFavorite is fulfilled', () => {
      const stateWithAllOffers: State = {
        ...initialState,
        all: offers,
      };

      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: updatedOffer,
      };

      const result = offersReducer(stateWithAllOffers, actionType);
      expect(result.all).toEqual(updatedOffers);
    });

    it('should return a state with updated favorite offers when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: updatedOffer,
      };

      const result = offersReducer(initialState, actionType);
      expect(result.favorites).toEqual([]);
    });

    it('should return a state with updated offers nearby when toggleFavorite is fulfilled', () => {
      const stateWithOffersNearby: State = {
        ...initialState,
        nearby: offers,
      };

      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: updatedOffer,
      };

      const result = offersReducer(stateWithOffersNearby, actionType);
      expect(result.nearby).toEqual(updatedOffers);
    });
  });

  describe('logout', () => {
    it('should return state with removed favorite offers when logout is fulfilled', () => {
      const stateWithFavorites: State = {
        ...initialState,
        favorites: offers,
      };

      const actionType = {
        type: logout.fulfilled.type,
      };

      const result = offersReducer(stateWithFavorites, actionType);
      expect(result.favorites).toEqual([]);
    });
  });
});
