import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.dark = !state.dark;
        }
    },
});

export const { toggleDarkMode } = themeSlice.actions

export default themeSlice.reducer