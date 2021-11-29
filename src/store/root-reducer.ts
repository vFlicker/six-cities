import appProcess from './app-process';
import offerData from './offer-data';
import userProcess from './user-process';
import { TRootAction } from '../types/action';
import { TRootState } from '../types/state';
import { AuthorizationStatus, CityName, SortType } from '../const';

export enum NameSpace {
  APP_PROCESS = 'APP_PROCESS',
  OFFER_DATA = 'OFFER_DATA',
  USER_PROCESS = 'USER_PROCESS',
}

const initialState: TRootState = {
  [NameSpace.APP_PROCESS]: {
    activeCardId: -1,
    currentCityName: CityName.AMSTERDAM,
    currentSortType: SortType.POPULAR,
  },
  [NameSpace.OFFER_DATA]: {
    offers: [],
    loading: true,
    error: null,
  },
  [NameSpace.USER_PROCESS]: {
    loading: true,
    error: null,
    authorizationStatus: AuthorizationStatus.AUTH,
    user: null,
  },
};

const rootReducer = (state = initialState, action: TRootAction): TRootState => ({
  [NameSpace.APP_PROCESS]: appProcess(state, action),
  [NameSpace.OFFER_DATA]: offerData(state, action),
  [NameSpace.USER_PROCESS]: userProcess(state, action),
});

export default rootReducer;
