import { CityName, NO_ACTIVE_CARD, SortType } from '~/constants';
import { State } from '~/store/slices/app/types';
import { error } from '~/utils';

export const initialState: State = {
  activeCardId: NO_ACTIVE_CARD,
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
  favoriteIdsInProgress: [],
  error: null,
};

export const loadingState: State = {
  ...initialState,
  favoriteIdsInProgress: [1],
};

export const rejectedState: State = {
  ...initialState,
  error: error.message,
};
