import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slice/sidebarResposive";

export const store = configureStore({
  reducer: {
    sidebarMenu: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
