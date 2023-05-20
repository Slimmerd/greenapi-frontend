import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {loadProfile, login, logout} from "./thunks/profileThunk";

export interface ProfileState {
    IdInstance: string
    ApiTokenInstance: string
    status: string
}

const initialState: ProfileState = {
    IdInstance: "",
    ApiTokenInstance: "",
    status: 'initial'
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                login.fulfilled,
                (state, action: PayloadAction<{IdInstance: string; ApiTokenInstance: string}>) => {
                    return {
                        IdInstance: action.payload.IdInstance,
                        ApiTokenInstance: action.payload.ApiTokenInstance,
                        status: "success",
                    };
                }
            )
            .addCase(login.rejected, (state) => {
                state.status = "error";
            });

        builder
            .addCase(loadProfile.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadProfile.fulfilled, (state, action: PayloadAction<{IdInstance: string; ApiTokenInstance: string}>) => {
                return {
                    IdInstance: action.payload.IdInstance,
                    ApiTokenInstance: action.payload.ApiTokenInstance,
                    status: 'success'
                };
            })
            .addCase(loadProfile.rejected, (state) => {
                state.status = "error";
            });

        builder
            .addCase(logout.pending, (state) => {
                state.status = "loading";
            })
            .addCase(logout.fulfilled, () => {
                return initialState;
            })
            .addCase(logout.rejected, (state) => {
                state.status = "error";
            });
    },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;