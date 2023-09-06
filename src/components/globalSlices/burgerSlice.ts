import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        setBurgerValue: (state) => {
            state.value = !state.value
        }
    }
})

export const { setBurgerValue } = burgerSlice.actions;

export const selectBurgerValue = (state: any) => state.burger.value;

export default burgerSlice.reducer;