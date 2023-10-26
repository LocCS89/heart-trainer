import { createSlice } from "@reduxjs/toolkit";
import { IRun } from "../types/run";

type RunState = {
  run: IRun | null;
};

const initialState: RunState = {
  run: null,
};
const userSlice = createSlice({
  name: "run",
  initialState,
  reducers: {
    setRun: (state, actions) => {
      state.run = actions.payload;
    },
    removeRun: (state) => {
      state.run = null;
    },
  },
});

export const setRun = userSlice.actions.setRun;
export const removeRun = userSlice.actions.removeRun;
export const runReducer = userSlice.reducer;
