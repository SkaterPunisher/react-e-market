import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const initialState = {
  good: {},
  loading: false,
};

export const getGood = createAsyncThunk(
  'good/getGood',
  async (action, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`http://localhost:3001/products/${action}`);
    dispatch(setGood(res.data));
  }
);

export const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {
    setGood: (state, action) => {
      state.good = action.payload;
    },
  },
  extraReducers: {
    [getGood.fulfilled]: (state) => {
      state.loading = false;
    } /* вызывается когда запрос прошел успешно */,
    [getGood.pending]: (state) => {
      state.loading = true;
    } /* вызывается когда начинаем запрос (вызываем функцию getGood) */,
    [getGood.rejected]: (state) => {
      state.loading = false;
      alert('Ошибка запроса на 1 товар')
    } /* вызывается когда есть какая то ошибка */,
  },
});

export const { setGood } = goodSlice.actions;
export default goodSlice.reducer;
