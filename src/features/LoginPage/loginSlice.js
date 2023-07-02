import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    save: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },
  },
});

export const { save } = loginSlice.actions;

export default loginSlice.reducer;
