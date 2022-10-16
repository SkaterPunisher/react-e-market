import { configureStore } from "@reduxjs/toolkit";
import goodSlice from "../features/initialGood/goodSlice";
import initialGoodsSlice from "../features/initialGoods/initialGoodsSlice";
import usersSlice from "../features/initialUsers/initialUsersSlice";

export const store = configureStore({
    reducer: {
        initialGoods: initialGoodsSlice,
        good: goodSlice,
        users: usersSlice,
    },
}) 