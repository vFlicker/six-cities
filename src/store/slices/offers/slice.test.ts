import { offersStore } from '~/tests';

import { toggleFavorite } from '../../api-actions/app';
import { logout } from '../../api-actions/user';
import offersReducer, {
  fetchAllOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from './slice';

const {
  initialState,
  stateWithOffers,
  stateWitUpdatedOffers,
  loadingState,
  rejectedState,
  updatedOffer,
} = offersStore;

describe('Slice: offers', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(offersReducer(undefined, actionType)).toEqual(initialState);
  });

  describe('fetchAllOffers', () => {
    it('should return a state with the loading status "true" when fetchAllOffers is pending', () => {
      const actionType = { type: fetchAllOffers.pending.type };

      const result = offersReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when fetchAllOffers is fulfilled', () => {
      const actionType = {
        type: fetchAllOffers.fulfilled.type,
        payload: stateWithOffers.all,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated all offers when fetchAllOffers is fulfilled', () => {
      const actionType = {
        type: fetchAllOffers.fulfilled.type,
        payload: stateWithOffers.all,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.all).toEqual(stateWithOffers.all);
    });

    it('should return a state with added error when fetchAllOffers is rejected', () => {
      const actionType = {
        type: fetchAllOffers.rejected.type,
        payload: rejectedState.error,
      };

      const result = offersReducer(initialState, actionType);
      expect(result.error).toEqual(rejectedState.error);
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
        payload: stateWithOffers.all,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('fetchFavoriteOffers', () => {
    it('should return a state with the loading status "true" when fetchFavoriteOffers is pending', () => {
      const actionType = { type: fetchFavoriteOffers.pending.type };

      const result = offersReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when fetchFavoriteOffers is fulfilled', () => {
      const actionType = {
        type: fetchFavoriteOffers.fulfilled.type,
        payload: stateWithOffers.favorites,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated favorite offers when fetchFavoriteOffers is fulfilled', () => {
      const actionType = {
        type: fetchFavoriteOffers.fulfilled.type,
        payload: stateWithOffers.favorites,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.favorites).toEqual(stateWithOffers.favorites);
    });

    it('should return a state with added error when fetchFavoriteOffers is rejected', () => {
      const actionType = {
        type: fetchFavoriteOffers.rejected.type,
        payload: rejectedState.error,
      };

      const result = offersReducer(initialState, actionType);
      expect(result.error).toEqual(rejectedState.error);
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
        payload: stateWithOffers.favorites,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('fetchOffersNearby', () => {
    it('should return a state with the loading status "true" when fetchOffersNearby is pending', () => {
      const actionType = { type: fetchOffersNearby.pending.type };

      const result = offersReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when fetchOffersNearby is fulfilled', () => {
      const actionType = {
        type: fetchOffersNearby.fulfilled.type,
        payload: stateWithOffers.nearby,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated offers nearby when fetchOffersNearby is fulfilled', () => {
      const actionType = {
        type: fetchOffersNearby.fulfilled.type,
        payload: stateWithOffers.nearby,
      };

      const result = offersReducer(loadingState, actionType);
      expect(result.nearby).toEqual(stateWithOffers.nearby);
    });

    it('should return a state with added error when fetchOffersNearby is rejected', () => {
      const actionType = {
        type: fetchOffersNearby.rejected.type,
        payload: rejectedState.error,
      };

      const result = offersReducer(initialState, actionType);
      expect(result.error).toEqual(rejectedState.error);
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
        payload: stateWithOffers.nearby,
      };

      const result = offersReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('toggleFavorite', () => {
    it('should return a state with updated all offers when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: updatedOffer,
      };

      const result = offersReducer(stateWithOffers, actionType);
      expect(result.all).toEqual(stateWitUpdatedOffers.all);
    });

    it('should return a state with updated favorite offers when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: updatedOffer,
      };

      const result = offersReducer(stateWithOffers, actionType);
      expect(result.favorites).toEqual(initialState.favorites);
    });

    it('should return a state with updated offers nearby when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: updatedOffer,
      };

      const result = offersReducer(stateWithOffers, actionType);
      expect(result.nearby).toEqual(stateWitUpdatedOffers.nearby);
    });
  });

  describe('logout', () => {
    it('should return state with removed favorite offers when logout is fulfilled', () => {
      const actionType = {
        type: logout.fulfilled.type,
      };

      const result = offersReducer(stateWithOffers, actionType);
      expect(result.favorites).toEqual(stateWitUpdatedOffers.favorites);
    });
  });
});
