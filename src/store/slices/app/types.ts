import { CityName, SortType } from '~/constants';
import { OfferID } from '~/types';

export type State = {
  activeCardId: number;
  currentCityName: CityName;
  currentSortType: SortType;
  favoriteIdsInProgress: OfferID[];
  error: string | null;
};
