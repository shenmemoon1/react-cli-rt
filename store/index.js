import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/features/content/ContentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
