import { AppStatus, CityName, SortType } from '~/constants';
import { makeError } from '~/utils';

import appSlice, {
  changeCityName,
  changeSortType,
  initializeApp,
  setActiveCardId,
  toggleFavorite,
} from './slice';
import { State } from './types';

const initialState: State = {
  initialize: AppStatus.Idle,
  activeCardId: -1,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
  favoriteIDsInProgress: [],
  error: null,
};

const error = makeError();

describe('Slice: app', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(appSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  it('should change currentCityName property by a given new cite name', () => {
    const newCityName = CityName.Brussels;

    const updatedState: State = {
      ...initialState,
      currentCityName: newCityName,
    };

    expect(appSlice.reducer(initialState, changeCityName(newCityName))).toEqual(
      updatedState,
    );
  });

  it('should change currentSortType property by a given new sort type', () => {
    const newSortType = SortType.TopRatedFirst;

    const updatedState: State = {
      ...initialState,
      currentSortType: newSortType,
    };

    expect(appSlice.reducer(initialState, changeSortType(newSortType))).toEqual(
      updatedState,
    );
  });

  it('should change activeCardId property by a given new id', () => {
    const newId = 10;

    const updatedState: State = {
      ...initialState,
      activeCardId: newId,
    };

    expect(appSlice.reducer(initialState, setActiveCardId(newId))).toEqual(
      updatedState,
    );
  });

  describe('initializeApp', () => {
    it('should update initialize to "pending" if initializeApp pending', () => {
      const ACTION_TYPE = { type: initializeApp.pending.type };

      const updatedState: State = {
        ...initialState,
        initialize: AppStatus.Pending,
      };

      expect(appSlice.reducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should update initialize to "succeeded" if initializeApp fulfilled', () => {
      const ACTION_TYPE = { type: initializeApp.fulfilled.type };

      const updatedState: State = {
        ...initialState,
        initialize: AppStatus.Succeeded,
      };

      expect(appSlice.reducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });

    it('should update initialize to "failed" if initializeApp rejected', () => {
      const ACTION_TYPE = { type: initializeApp.rejected.type };

      const updatedState: State = {
        ...initialState,
        initialize: AppStatus.Failed,
      };

      expect(appSlice.reducer(initialState, ACTION_TYPE)).toEqual(updatedState);
    });
  });

  describe('toggleFavorite', () => {
    it('should add id to favoriteIDsInProgress if toggleFavorite pending', () => {
      const initialState1: State = {
        initialize: AppStatus.Idle,
        activeCardId: -1,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [],
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
        favoriteIDsInProgress: [1],
      };

      expect(appSlice.reducer(initialState1, ACTION_TYPE_1)).toEqual(
        updatedState1,
      );

      const initialState2: State = {
        initialize: AppStatus.Idle,
        activeCardId: -1,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [1],
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
        favoriteIDsInProgress: [1, 2],
      };

      expect(appSlice.reducer(initialState2, ACTION_TYPE_2)).toEqual(
        updatedState2,
      );
    });

    it('should remove id from favoriteIDsInProgress if toggleFavorite fulfilled', () => {
      const initialState1: State = {
        initialize: AppStatus.Idle,
        activeCardId: -1,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [1, 2],
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
        favoriteIDsInProgress: [2],
      };

      expect(appSlice.reducer(initialState1, ACTION_TYPE_1)).toEqual(
        updatedState1,
      );

      const initialState2: State = {
        initialize: AppStatus.Idle,
        activeCardId: -1,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [2],
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
        favoriteIDsInProgress: [],
      };

      expect(appSlice.reducer(initialState2, ACTION_TYPE_2)).toEqual(
        updatedState2,
      );
    });

    it('should remove id from favoriteIDsInProgress if toggleFavorite rejected', () => {
      const initialState1: State = {
        initialize: AppStatus.Idle,
        activeCardId: -1,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [1, 2],
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
        favoriteIDsInProgress: [2],
        error: error,
      };

      expect(appSlice.reducer(initialState1, ACTION_TYPE_1)).toEqual(
        updatedState1,
      );

      const initialState2: State = {
        initialize: AppStatus.Idle,
        activeCardId: -1,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [2],
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
        favoriteIDsInProgress: [],
        error: error,
      };

      expect(appSlice.reducer(initialState2, ACTION_TYPE_2)).toEqual(
        updatedState2,
      );
    });

    it('should remove error from state if toggleFavorite pending or fulfilled', () => {
      const initialState: State = {
        initialize: AppStatus.Idle,
        activeCardId: -1,
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [],
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
        favoriteIDsInProgress: [1],
        error: null,
      };

      expect(appSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        updatedState,
      );

      expect(appSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        updatedState,
      );
    });
  });
});
