import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {

};

export const addBasket = createAsyncThunk(
  'basket/addBasket',
  async (action, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`http://localhost:3001/products/${action}`);
    dispatch(add(res.data));
  }
);

export const addInBasket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
        let id = action.payload.id
        let user = action.payload.user
        let goods = action.payload.goods
        let item = user.basket.item
        item.push(goods)

        console.log(item)

        // axios({
        //     method: 'patch',
        //     url: `http://localhost:3001/users/${user.id}`,
        //     data: {
        //       basket: {
        //         item: user.basket.item.push(goods),
        //         sum: user.basket.sum + goods.price
        //       }
        //     },
        //   });
    },
  },
  extraReducers: {
    [addBasket.fulfilled]: (state) => {
      state.loading = false;
    } /* вызывается когда запрос прошел успешно */,
    [addBasket.pending]: (state) => {
      state.loading = true;
    } /* вызывается когда начинаем запрос (вызываем функцию getGood) */,
    [addBasket.rejected]: (state) => {
      state.loading = false;
      alert('Ошибка на добавление в корзину')
    } /* вызывается когда есть какая то ошибка */,
  },
});

export const { add } = addInBasket.actions;
export default addInBasket.reducer;
