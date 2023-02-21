import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

const firstValueSlice = createSlice({
    name: 'firstValue',
    initialState: initialState,
    reducers: {
        changeFirstValue: (state, action) => {
            state.value = action.payload;
        } 
    },
});

export const { changeFirstValue } = firstValueSlice.actions;

export const getFirstValue = (state: any) => state.firstValue.value;

export default firstValueSlice.reducer;