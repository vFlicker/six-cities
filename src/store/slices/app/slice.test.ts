import { AppStatus, CityName, SortType } from '~/constants';

import appSlice, {
  changeCityName,
  changeSortType,
  setActiveCardId,
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
});
