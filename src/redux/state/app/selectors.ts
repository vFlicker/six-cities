import { ReducerName } from '@/constants';

import { RootState } from '../root-reducer';

export const getActiveCard = (state: RootState): number => (
  state[ReducerName.App].activeCardId
);
