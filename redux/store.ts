
import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbar-slice";

export const store = configureStore({
    reducer: {
        navbarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch