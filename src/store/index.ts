import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import uiReducer from "./slices/uiSlice";
import storiesReducer from "./slices/storiesSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      stories: storiesReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector;