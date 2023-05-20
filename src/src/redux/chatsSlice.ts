import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import {clean, getNotification, loadChats, sendMessage, startChat, update} from "./thunks/chatsThunk";
import {ChatT} from "../types/ChatT";

export interface chatsState {
    chats: ChatT[]
    status: string
}

const initialState: chatsState = {
    chats: [],
    status: 'initial'
};

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(update.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                update.fulfilled,
                (state, action: PayloadAction<ChatT[]>) => {
                    return {
                        chats: action.payload,
                        status: "success",
                    };
                }
            )
            .addCase(update.rejected, (state) => {
                state.status = "error";
            });

        builder
            .addCase(loadChats.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadChats.fulfilled, (state, action: PayloadAction<ChatT[]>) => {
                return {
                    chats: action.payload,
                    status: "success",
                };
            })
            .addCase(loadChats.rejected, (state) => {
                state.status = "error";
            });

        builder
            .addCase(clean.pending, (state) => {
                state.status = "loading";
            })
            .addCase(clean.fulfilled, () => {
                return initialState;
            })
            .addCase(clean.rejected, (state) => {
                state.status = "error";
            });

        builder
            .addCase(sendMessage.pending, (state) => {
                state.status = "loading";
            })
            .addCase(sendMessage.fulfilled, (state, action: PayloadAction<ChatT[]>) => {
                return {
                    chats: action.payload,
                    status: "success",
                };
            })
            .addCase(sendMessage.rejected, (state) => {
                state.status = "error";
            });

        builder
            .addCase(getNotification.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getNotification.fulfilled, (state,action: PayloadAction<ChatT[]>) => {
                return {
                    chats: action.payload,
                    status: "success",
                };
            })
            .addCase(getNotification.rejected, (state) => {
                state.status = "error";
            });

        builder
            .addCase(startChat.pending, (state) => {
                state.status = "loading";
            })
            .addCase(startChat.fulfilled, (state,action: PayloadAction<ChatT[]>) => {
                return {
                    chats: action.payload,
                    status: "success",
                };
            })
            .addCase(startChat.rejected, (state) => {
                state.status = "error";
            });
    },
});

export const {} = chatsSlice.actions;

export default chatsSlice.reducer;