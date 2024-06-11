// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
// Import các reducer khác nếu có
// import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    count: countReducer,
    // user: userReducer,
  },
});

export default store;
