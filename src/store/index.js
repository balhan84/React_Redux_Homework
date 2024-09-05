import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userCardSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
