import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offer: null,
  loading: false,
  error: null,
};

const offerReducer = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
});

export default offerReducer.reducer;
