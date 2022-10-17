import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const addInBasket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      let user = action.payload.user;
      let id = action.payload.id;
      let goods = action.payload.goods;
      let basket = [
        {
          id: id,
          col: 1,
          sum: goods.price,
        },
      ];
      axios({
        method: 'patch',
        url: `http://localhost:3001/users/${user.id}`,
        data: {
          basket: basket,
        },
      });
      
    },
  },
});

export const { add } = addInBasket.actions;
export default addInBasket.reducer;
