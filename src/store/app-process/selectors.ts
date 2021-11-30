import { NameSpace } from '../root-reducer';
import { TRootState } from '../../types/state';

const getActiveCard = (state: TRootState): number => (
  state[NameSpace.APP_PROCESS].activeCardId
);

export default getActiveCard;
