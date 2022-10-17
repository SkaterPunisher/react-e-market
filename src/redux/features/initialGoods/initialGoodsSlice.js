import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goods: [],
  loading: false,
};

let i = 10

export const getGoods = createAsyncThunk(
  'goods/getGoods',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`http://localhost:3001/products?_start=0&_end=${i}`);
    dispatch(setGoods(res.data));
  }
);

export const getMoreGoods = createAsyncThunk(
  'goods/getGoods',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`http://localhost:3001/products?_start=${i}&_end=${i + 10}`);
    i += 10
    dispatch(addGoods(res.data));
  }
);

export const initialGoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods: (state, action) => {
      state.goods = action.payload;
    },
    addGoods: (state, action) => {
      action.payload.forEach((item) => {
        state.goods.push(item)
      })
    },
  },
  extraReducers: {
    [getGoods.fulfilled]: (state) => {
      state.loading = false;
    } /* вызывается когда запрос прошел успешно */,
    [getGoods.pending]: (state) => {
      state.loading = true;
    } /* вызывается когда начинаем запрос (вызываем функцию getGoods) */,
    [getGoods.rejected]: (state) => {
      state.loading = false;
      alert('Ошибка запроса на товары')
    } /* вызывается когда есть какая то ошибка */,

    [getMoreGoods.fulfilled]: (state) => {
      state.loading = false;
    } /* вызывается когда запрос прошел успешно */,
    [getMoreGoods.pending]: (state) => {
      state.loading = true;
    } /* вызывается когда начинаем запрос (вызываем функцию getGoods) */,
    [getMoreGoods.rejected]: (state) => {
      state.loading = false;
      alert('Ошибка запроса на добавление товаров')
    } /* вызывается когда есть какая то ошибка */,
  },
});

export const { setGoods, addGoods } = initialGoodsSlice.actions;
export default initialGoodsSlice.reducer;
