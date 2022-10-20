import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  limit: 10,
};

export const initialGoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addGoods: (state) => {
      state.limit = state.limit + 10;
    },
  },
  extraReducers: {},
});

export const { addGoods } = initialGoodsSlice.actions;
export default initialGoodsSlice.reducer;
