import { ReducerName } from '../../../const';
import { RootState } from '../root-reducer';

export const getActiveCard = (state: RootState): number => (
  state[ReducerName.App].activeCardId
);
