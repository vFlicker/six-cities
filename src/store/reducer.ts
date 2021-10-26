import { CityName, OfferListItem } from '../types';
import { offers } from '../mocks';
import { ActionType } from './action';

export type TState = {
  city: CityName,
  offers: OfferListItem[],
};

type TAction = {
  type: ActionType,
  payload: CityName | OfferListItem[],
};

const initialState: TState = {
  city: 'Amsterdam',
  offers,
};

export const reducer = (state = initialState, action: TAction): TState => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return <TState> {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_OFFERS:
      return <TState> {
        ...state,
        offers: action.payload,
      };
    default:
  }

  return state;
};
