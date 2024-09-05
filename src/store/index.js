import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userCardSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export default store;
