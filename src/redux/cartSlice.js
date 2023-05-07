import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: false,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setCart } = CartSlice.actions;
export default CartSlice.reducer;
