import { AuthorizationStatus, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TGroupedOffers, TOffer, TOffers } from './offer';
import { rootReducer } from '../store/root-reducer';
import { TUser } from './user';

export type AppState = {
  activeCardId: number;
  currentCityName: CityName;
  currentSortType: SortType;
};

export type OfferState = {
  offer: TOffer | null;
  loading: boolean;
  error: null | ApiError;
};

export type OffersState = {
  groupedOffers: TGroupedOffers | null;
  loading: boolean;
  error: ApiError | null;
};

export type OffersFavoriteState = {
  offersFavorite: TOffers;
  loading: boolean;
  error: ApiError | null;
};

export type OfferNearbyState = {
  offersNearby: TOffers;
  loading: boolean;
  error: ApiError | null;
};

export type UserState = {
  loading: boolean;
  error: ApiError | null;
  authorizationStatus: AuthorizationStatus;
  user: TUser | null;
};

export type RootState = ReturnType<typeof rootReducer>;
