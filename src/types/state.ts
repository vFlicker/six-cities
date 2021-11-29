import { AuthorizationStatus, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TOffer } from './offer';
import { TUser } from './user';

export type TState = {
  activeCardId: number,
  currentCityName: CityName,
  currentSortType: SortType,
  offers: TOffer[],
  loading: boolean,
  error: null | ApiError,
  authorizationStatus: AuthorizationStatus,
  user: TUser | null
}
