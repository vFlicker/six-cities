import { ReducerName } from '../../const';
import { TRootState } from '../../types/state';

const getActiveCard = (state: TRootState): number => (
  state[ReducerName.APP_PROCESS].activeCardId
);

export default getActiveCard;
