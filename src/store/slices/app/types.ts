import { AppStatus, CityName, SortType } from '~/constants';
import { OfferID } from '~/types';

export type State = {
  initialize: AppStatus;
  activeCardId: number;
  currentCityName: CityName;
  currentSortType: SortType;
  favoriteIDsInProgress: OfferID[];
  error: Error | null;
};