import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './reducers/theme';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});