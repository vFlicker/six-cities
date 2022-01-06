import { ReducerName } from '../../../const';
import { RootState } from '../../../types/state';

export const getActiveCard = (state: RootState): number => (
  state[ReducerName.App].activeCardId
);
