import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  limit: 10,
  category: '',
  searchName: ''
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
    searchName: (state, action) => {
      state.searchName = action.payload;
    },
  },
  extraReducers: {},
});

export const { addGoods, changeCategory, searchName } = initialGoodsSlice.actions;
export default initialGoodsSlice.reducer;
