import { ReducerName } from '../../const';
import { TRootState } from '../../types/state';

/* eslint-disable import/prefer-default-export */
export const getActiveCard = (state: TRootState): number => (
  state[ReducerName.AppProcess].activeCardId
);
