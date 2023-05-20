import {createAsyncThunk} from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "profile/login",
    async ({IdInstance, ApiTokenInstance}: { IdInstance: string, ApiTokenInstance: string }, thunkAPI) => {
        await localStorage.setItem('IdInstance', IdInstance)
        await localStorage.setItem('ApiTokenInstance', ApiTokenInstance)

        return {IdInstance, ApiTokenInstance};
    }
);

export const loadProfile = createAsyncThunk(
    "profile/load",
    async ( thunkAPI) => {
        const IdInstance= await localStorage.getItem('IdInstance')
        const ApiTokenInstance = await localStorage.getItem('ApiTokenInstance')

        if (IdInstance == null || ApiTokenInstance == null){
            throw new Error('Some of the auth keys is null')
        }

        return {IdInstance, ApiTokenInstance};
    }
);

export const logout = createAsyncThunk(
    "profile/logout",
    async ( thunkAPI) => {
        await localStorage.clear()
        return true;
    }
);