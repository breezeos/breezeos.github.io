import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        showNav: (state, action) => {
            state.active = action.payload;
        }
    },
});

export const { showNav } = navSlice.actions

export default navSlice.reducer