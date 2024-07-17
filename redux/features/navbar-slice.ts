import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: NavbarState
}

type NavbarState = {
    activeRoute: string,
}

const initialState = {
    value: {
        activeRoute: "Dashboard",
    } as NavbarState
} as InitialState

export const navbar = createSlice(
    {
        name: 'navbar',
        initialState,
        reducers: {
            toggleActiveState: (state, action: PayloadAction<string>) => {
                state.value.activeRoute = action.payload
            }
        }
    }
)

export const { toggleActiveState } = navbar.actions
export default navbar.reducer
