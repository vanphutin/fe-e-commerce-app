// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import userReducer from "./userReducer";
// Import các reducer khác nếu có
// import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    count: countReducer,
    user: userReducer,
    // user: userReducer,
  },
});

export default store;
