import { configureStore } from "@reduxjs/toolkit";
import addInBasket from "../features/addInBasket/addInBasket";
import goodSlice from "../features/initialGood/goodSlice";
import initialGoodsSlice from "../features/initialGoods/initialGoodsSlice";
import usersSlice from "../features/initialUsers/initialUsersSlice";

export const store = configureStore({
    reducer: {
        initialGoods: initialGoodsSlice,
        good: goodSlice,
        users: usersSlice,
        addBasket: addInBasket
    },
}) 