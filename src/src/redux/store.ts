import { configureStore } from "@reduxjs/toolkit";
import profile from "./profileSlice";
import chats from "./chatsSlice";

export const store = configureStore({
    reducer: {
        profile,
        chats,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;