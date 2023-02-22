import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const newCalculationSlice = createSlice({
  name: "newCalculation",
  initialState,
  reducers: {
    changeNewCalculation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const getNewCalculationValue = (state: any) => state.newCalculation.value

export const { changeNewCalculation } = newCalculationSlice.actions;

export default newCalculationSlice.reducer;
