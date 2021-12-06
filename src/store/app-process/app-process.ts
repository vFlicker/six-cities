import { createReducer } from '@reduxjs/toolkit';
import { TAppProcessState } from '../../types/state';
import setActiveCard from './action';

const initialState: TAppProcessState = {
  activeCardId: -1,
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCard, (state, action) => {
      state.activeCardId = action.payload;
    });
});

export default appProcess;
