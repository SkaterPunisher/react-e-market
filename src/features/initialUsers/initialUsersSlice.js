import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  loading: false,
  auth: false,
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async (action, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`http://localhost:3001/users?role=admin`);
    dispatch(setUser(res.data));
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    logIn: (state, action) => {
      state.auth = true;
    },
    logOut: (state, action) => {
      state.auth = false;
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (state) => {
      state.loading = false;
    } /* вызывается когда запрос прошел успешно */,
    [getUser.pending]: (state) => {
      state.loading = true;
    } /* вызывается когда начинаем запрос (вызываем функцию getGood) */,
    [getUser.rejected]: (state) => {
      state.loading = false;
      alert('Ошибка запроса на пользователей');
    } /* вызывается когда есть какая то ошибка */,
  },
});

export const { setUser, logIn, logOut } = usersSlice.actions;
export default usersSlice.reducer;
