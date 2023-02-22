import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: "0",
};

export const displayValueSlice = createSlice({
  name: "displayValue",
  initialState,
  reducers: {
    changeDisplayValue: (state, action) => {
      if (state.result === "0") state.result = "";
      state.result = state.result + action.payload;
    },
    changeFullDisplayValue: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { changeDisplayValue, changeFullDisplayValue } =
  displayValueSlice.actions;

export const getDisplayValue = (state: any) => state.display.result;

export default displayValueSlice.reducer;
