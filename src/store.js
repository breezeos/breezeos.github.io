import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './reducers/theme';
import navReducer from './reducers/nav';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        nav: navReducer,
    },
});