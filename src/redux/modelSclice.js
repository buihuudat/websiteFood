import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    open: false,
    data: [],
  },
};

export const ModelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModelSlice: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setModelSlice } = ModelSlice.actions;
export default ModelSlice.reducer;
