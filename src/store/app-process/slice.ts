import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppProcessState, TRootState } from '../../types/state';
import { ReducerName } from '../../const';

const initialState: TAppProcessState = {
  activeCardId: -1,
};

export const appProcessSlice = createSlice({
  name: ReducerName.AppProcess,
  initialState,
  reducers: {
    setActiveCard: (state, action: PayloadAction<number>) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { setActiveCard } = appProcessSlice.actions;

export const getActiveCard = (state: TRootState): number => (
  state[ReducerName.AppProcess].activeCardId
);

export default appProcessSlice.reducer;
