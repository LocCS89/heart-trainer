import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { errorReducer } from "./error.reducer";
import { loadingReducer } from "./loading.reducer";
import { userReducer } from "./user.reducer";
import { popupReducer } from "./popup.reducer";
import { runReducer } from "./run.reducer";

const store = configureStore({
  reducer: {
    error: errorReducer,
    loading: loadingReducer,
    user: userReducer,
    popup: popupReducer,
    run:runReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
