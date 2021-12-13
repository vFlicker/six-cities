import { createAction } from '@reduxjs/toolkit';

export enum ActionType {
  SetActiveCard = 'appProcess/setActiveCard',
}

const setActiveCard = createAction(
  ActionType.SetActiveCard,
  (cardId: number) => ({
    payload: cardId,
  }),
);

export default setActiveCard;
