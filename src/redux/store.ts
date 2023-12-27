import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

// Types for RootState and AppDispatch to be used throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
