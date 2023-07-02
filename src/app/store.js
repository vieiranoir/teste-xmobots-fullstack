import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/LoginPage/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
