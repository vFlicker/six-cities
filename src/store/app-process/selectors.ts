import { ReducerName } from '../../const';
import { TRootState } from '../../types/state';

const getActiveCard = (state: TRootState): number => (
  state[ReducerName.AppProcess].activeCardId
);

export default getActiveCard;
