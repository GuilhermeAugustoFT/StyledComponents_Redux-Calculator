import newCalculationReducer from "./Reducers/newCalculation";
import displayValueReducer from "./Reducers/displayValue";
import operatorReducer from "./Reducers/operator";
import firstValueReducer from "./Reducers/firstValue";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    operator: operatorReducer,
    display: displayValueReducer,
    firstValue: firstValueReducer,
    newCalculation: newCalculationReducer,
  },
});

export default store;
