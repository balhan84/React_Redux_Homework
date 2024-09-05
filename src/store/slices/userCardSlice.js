import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Test",
  lastName: "Testov",
  isFavourite: true,
};

const userCardSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectFavourite: (state) => {
      state.isFavourite = !state.isFavourite;
    },
  },
});

const { reducer, actions } = userCardSlice;

export const { selectFavourite } = actions;
export default reducer;
