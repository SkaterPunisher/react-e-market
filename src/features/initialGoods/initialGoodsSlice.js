import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    const res = await axios.get(`http://localhost:3001/products?_start=0&_end=${i + 10}`);
    i += 10
    dispatch(setGoods(res.data));
  }
);

export const initialGoodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods: (state, action) => {
      state.goods = action.payload;
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
  },
});

export const { setGoods } = initialGoodsSlice.actions;
export default initialGoodsSlice.reducer;
