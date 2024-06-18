// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import userReducer from "./userReducer";
import userReducer_Product from "./userReducer_Product";
// Import các reducer khác nếu có
// import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    count: countReducer,
    user: userReducer,
    product: userReducer_Product,
    // user: userReducer,
  },
});

export default store;
