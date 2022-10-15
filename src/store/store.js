import { configureStore } from "@reduxjs/toolkit";
import goodSlice from "../features/goodSlice/goodSlice";
import initialGoodsSlice from "../features/initialGoods/initialGoodsSlice";

export const store = configureStore({
    reducer: {
        initialGoods: initialGoodsSlice,
        good: goodSlice,
    },
}) 