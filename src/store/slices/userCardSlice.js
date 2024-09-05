import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Test",
  lastName: "Testov",
  isFavourite: true,
};

const userCardSlice = createSlice({
  initialState,
  name: "userCard",
  reducers: {},
});

const { reducer } = userCardSlice;

export default reducer;
