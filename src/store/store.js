import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/Cart/CartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
