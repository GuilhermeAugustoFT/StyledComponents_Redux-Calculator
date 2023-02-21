import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  operator: "",
};

export const operatorSlice = createSlice({
  name: "operator",
  initialState: initialState,
  reducers: {
    // action que altera o valor do operator
    changeOperator: (state, action) => {
        state.operator = action.payload;
    }
  }
});

// exportando as actions do reducer
export const { changeOperator } = operatorSlice.actions;

// Getter que retorna o estado atual
export const getOperator = (state: any) => state.operator 

// exportando o reducer em si 
export default operatorSlice.reducer;
