import { createSlice } from "@reduxjs/toolkit";

interface InitState {}

const initialState: InitState = {};

const kuisSlice = createSlice({
  name: "kuis",
  initialState,
  reducers: {},
});

export const {} = kuisSlice.actions;

export default kuisSlice.reducer;
