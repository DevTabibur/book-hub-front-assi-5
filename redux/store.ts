import { configureStore } from "@reduxjs/toolkit";
import AuthenticationAPI from "./api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
  reducer: {
    [AuthenticationAPI.reducerPath]: AuthenticationAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthenticationAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
