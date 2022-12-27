import { AppStatus, CityName, NO_ACTIVE_CARD, SortType } from '~/constants';
import { makeError } from '~/utils';

import appReducer, {
  changeCityName,
  changeSortType,
  initializeApp,
  setActiveCardId,
  toggleFavorite,
} from './slice';
import { State } from './types';

const initialState: State = {
  initialize: AppStatus.Idle,
  activeCardId: NO_ACTIVE_CARD,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
  favoriteIdsInProgress: [],
  error: null,
};

const error = makeError();

describe('Slice: app', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(appReducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  it('should change "currentCityName" by a given new cite name', () => {
    const newCityName = CityName.Brussels;

    const updatedState: State = {
      ...initialState,
      currentCityName: newCityName,
    };

    expect(appReducer(initialState, changeCityName(newCityName))).toEqual(
      updatedState,
    );
  });

  it('should change currentSortType property by a given new sort type', () => {
    const newSortType = SortType.TopRatedFirst;

    const updatedState: State = {
      ...initialState,
      currentSortType: newSortType,
    };

    expect(appReducer(initialState, changeSortType(newSortType))).toEqual(
      updatedState,
    );
  });

  it('should change activeCardId property by a given new id', () => {
    const newId = 10;

    const updatedState: State = {
      ...initialState,
      activeCardId: newId,
    };

    expect(appReducer(initialState, setActiveCardId(newId))).toEqual(
      updatedState,
    );
  });

  describe('initializeApp', () => {
    it('should update initialize to "pending" when initializeApp is pending', () => {
      const ACTION_TYPE = { type: initializeApp.pending.type };

      const updatedState: State = {
        ...initialState,
        initialize: AppStatus.Pending,
      };

      expect(appReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should update initialize to "succeeded" when initializeApp is fulfilled', () => {
      const ACTION_TYPE = { type: initializeApp.fulfilled.type };

      const updatedState: State = {
        ...initialState,
        initialize: AppStatus.Succeeded,
      };

      expect(appReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should update initialize to "failed" when initializeApp is rejected', () => {
      const ACTION_TYPE = { type: initializeApp.rejected.type };

      const updatedState: State = {
        ...initialState,
        initialize: AppStatus.Failed,
      };

      expect(appReducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });
  });

  describe('toggleFavorite', () => {
    it('should add id to favoriteIdsInProgress when toggleFavorite is pending', () => {
      const initialState1: State = {
        initialize: AppStatus.Idle,
        activeCardId: NO_ACTIVE_CARD,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIdsInProgress: [],
        error: null,
      };

      const ACTION_TYPE_1 = {
        type: toggleFavorite.pending.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const updatedState1: State = {
        ...initialState1,
        favoriteIdsInProgress: [1],
      };

      expect(appReducer(initialState1, ACTION_TYPE_1)).toEqual(updatedState1);

      const initialState2: State = {
        initialize: AppStatus.Idle,
        activeCardId: NO_ACTIVE_CARD,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIdsInProgress: [1],
        error: null,
      };

      const ACTION_TYPE_2 = {
        type: toggleFavorite.pending.type,
        meta: {
          arg: { id: 2 },
        },
      };

      const updatedState2: State = {
        ...initialState2,
        favoriteIdsInProgress: [1, 2],
      };

      expect(appReducer(initialState2, ACTION_TYPE_2)).toEqual(updatedState2);
    });

    it('should remove id from favoriteIdsInProgress when toggleFavorite is fulfilled', () => {
      const initialState1: State = {
        initialize: AppStatus.Idle,
        activeCardId: NO_ACTIVE_CARD,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIdsInProgress: [1, 2],
        error: null,
      };

      const ACTION_TYPE_1 = {
        type: toggleFavorite.fulfilled.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const updatedState1: State = {
        ...initialState1,
        favoriteIdsInProgress: [2],
      };

      expect(appReducer(initialState1, ACTION_TYPE_1)).toEqual(updatedState1);

      const initialState2: State = {
        initialize: AppStatus.Idle,
        activeCardId: NO_ACTIVE_CARD,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIdsInProgress: [2],
        error: null,
      };

      const ACTION_TYPE_2 = {
        type: toggleFavorite.fulfilled.type,
        meta: {
          arg: { id: 2 },
        },
      };

      const updatedState2: State = {
        ...initialState2,
        favoriteIdsInProgress: [],
      };

      expect(appReducer(initialState2, ACTION_TYPE_2)).toEqual(updatedState2);
    });

    it('should remove id from favoriteIdsInProgress when toggleFavorite is rejected', () => {
      const initialState1: State = {
        initialize: AppStatus.Idle,
        activeCardId: NO_ACTIVE_CARD,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIdsInProgress: [1, 2],
        error: null,
      };

      const ACTION_TYPE_1 = {
        type: toggleFavorite.rejected.type,
        meta: {
          arg: { id: 1 },
        },
        payload: error,
      };

      const updatedState1: State = {
        ...initialState1,
        favoriteIdsInProgress: [2],
        error: error,
      };

      expect(appReducer(initialState1, ACTION_TYPE_1)).toEqual(updatedState1);

      const initialState2: State = {
        initialize: AppStatus.Idle,
        activeCardId: NO_ACTIVE_CARD,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIdsInProgress: [2],
        error: null,
      };

      const ACTION_TYPE_2 = {
        type: toggleFavorite.rejected.type,
        meta: {
          arg: { id: 2 },
        },
        payload: error,
      };

      const updatedState2: State = {
        ...initialState2,
        favoriteIdsInProgress: [],
        error: error,
      };

      expect(appReducer(initialState2, ACTION_TYPE_2)).toEqual(updatedState2);
    });

    it('should remove error from state when toggleFavorite is pending or fulfilled', () => {
      const initialState: State = {
        initialize: AppStatus.Idle,
        activeCardId: NO_ACTIVE_CARD,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIdsInProgress: [],
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: toggleFavorite.pending.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const FULFILLED_ACTION_TYPE = {
        type: toggleFavorite.pending.type,
        meta: {
          arg: { id: 1 },
        },
      };

      const updatedState: State = {
        ...initialState,
        favoriteIdsInProgress: [1],
        error: null,
      };

      expect(appReducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        updatedState,
      );

      expect(appReducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        updatedState,
      );
    });
  });
});
