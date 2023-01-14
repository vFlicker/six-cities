import { CityName, SortType } from '~/constants';
import { initialState, loadingState, rejectedState } from '~/tests/store/app';
import { error } from '~/utils/mock-data';

import appReducer, {
  changeCityName,
  changeSortType,
  setActiveCardId,
  toggleFavorite,
} from './slice';

describe('Slice: app', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(appReducer(undefined, actionType)).toEqual(initialState);
  });

  it('should return a state with updated currentCityName', () => {
    const newCityName = CityName.Brussels;

    const result = appReducer(initialState, changeCityName(newCityName));
    expect(result.currentCityName).toBe(newCityName);
  });

  it('should return a state with updated currentSortType', () => {
    const newSortType = SortType.TopRatedFirst;

    const result = appReducer(initialState, changeSortType(newSortType));
    expect(result.currentSortType).toBe(newSortType);
  });

  it('should return a state with updated activeCardId', () => {
    const newId = 10;

    const result = appReducer(initialState, setActiveCardId(newId));
    expect(result.activeCardId).toBe(newId);
  });

  describe('toggleFavorite', () => {
    it('should return state with added id to favoriteIdsInProgress when toggleFavorite is pending', () => {
      const actionType = {
        type: toggleFavorite.pending.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const result = appReducer(initialState, actionType);
      expect(result.favoriteIdsInProgress).toEqual([1]);
    });

    it('should return state with removed id to favoriteIdsInProgress when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const result = appReducer(loadingState, actionType);
      expect(result.favoriteIdsInProgress).toEqual([]);
    });

    it('should return state with removed id to favoriteIdsInProgress when toggleFavorite is rejected', () => {
      const actionType = {
        type: toggleFavorite.rejected.type,
        meta: {
          arg: { id: 1 },
        },
        payload: rejectedState.error,
      };

      const result = appReducer(loadingState, actionType);
      expect(result.favoriteIdsInProgress).toEqual([]);
    });

    it('should return state with added error when toggleFavorite is rejected', () => {
      const actionType = {
        type: toggleFavorite.rejected.type,
        meta: {
          arg: { id: 1 },
        },
        payload: error,
      };

      const result = appReducer(loadingState, actionType);
      expect(result.error).toEqual(error.message);
    });

    it('should return state with removed error when toggleFavorite is pending', () => {
      const actionType = {
        type: toggleFavorite.pending.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const result = appReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return state with removed error when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const result = appReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });
});
