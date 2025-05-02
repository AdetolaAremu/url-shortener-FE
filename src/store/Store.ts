import { configureStore } from "@reduxjs/toolkit";
import shortenerReducer from "./Shortener.slice";

const store = configureStore({
  reducer: {
    shortener: shortenerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
