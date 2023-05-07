import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice";
import modelSclice from "./redux/modelSclice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    model: modelSclice,
  },
});
