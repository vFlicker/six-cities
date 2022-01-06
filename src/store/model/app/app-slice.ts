import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ReducerName } from '../../../const';
import { AppState } from '../../../types/state';

const initialState: AppState = {
  activeCardId: -1,
};

export const appSlice = createSlice({
  name: ReducerName.App,
  initialState,
  reducers: {
    setActiveCard: (state, action: PayloadAction<number>) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { setActiveCard } = appSlice.actions;
