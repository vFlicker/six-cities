import { createAction } from '@reduxjs/toolkit';

enum ActionType {
  SetActiveCard = 'appProcess/setActiveCard',
}

const setActiveCard = createAction(
  ActionType.SetActiveCard,
  (cardId: number) => ({
    payload: cardId,
  }),
);

export default setActiveCard;
