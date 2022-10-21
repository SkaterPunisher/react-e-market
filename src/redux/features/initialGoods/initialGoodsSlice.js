import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  limit: 10,
  category: '',
};

export const initialGoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addGoods: (state) => {
      state.limit = state.limit + 10;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: {},
});

export const { addGoods, changeCategory } = initialGoodsSlice.actions;
export default initialGoodsSlice.reducer;
