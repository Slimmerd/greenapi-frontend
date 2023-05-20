import {createAsyncThunk} from "@reduxjs/toolkit";
import {ChatT} from "../../types/ChatT";
import {GreenAPI} from "../../api/GreenAPI";
import {SendMessageT} from "../../types/SendMessageT";
import {RootState} from "../store";

export const loadChats = createAsyncThunk(
    "chats/load",
    async () => {
        let chats = await localStorage.getItem('chats')

        if (chats !== null && chats.length > 0) {
            chats = await JSON.parse(chats)
        }

        return (chats ?? []) as ChatT[]
    }
);

export const update = createAsyncThunk(
    "chats/update",
    async (newChat: ChatT, thunkAPI) => {
        const {chats} = thunkAPI.getState() as RootState

        const updatedChats: ChatT[] = [...chats.chats]
        const chatIndex = updatedChats.findIndex((chat) => chat.chatId === newChat.chatId)
        updatedChats[chatIndex] = newChat;

        await localStorage.setItem('chats', JSON.stringify(updatedChats))
        return updatedChats;
    }
);

export const clean = createAsyncThunk(
    "chats/clear",
    async () => {
        await localStorage.clear()
        return true;
    }
);

export const startChat = createAsyncThunk(
    "chats/startChat",
    async ({chatId}: { chatId: string }, thunkAPI) => {
        const {chats} = thunkAPI.getState() as RootState

        const updatedChats: ChatT[] = [...chats.chats]

        updatedChats.push({chatId: chatId, messages: []})


        await localStorage.setItem('chats', JSON.stringify(updatedChats))

        return updatedChats
    }
);


export const sendMessage = createAsyncThunk(
        "chats/sendMessage",
        async ({messageObject, idInstance, apiTokenInstance}: {
                   messageObject: SendMessageT,
                   idInstance: string,
                   apiTokenInstance: string,
               },
               thunkAPI
        ) => {
            const {chats} = thunkAPI.getState() as RootState
            const res = await GreenAPI.sendMessage(messageObject, idInstance, apiTokenInstance)

            const updatedChats: ChatT[] = [...chats.chats]
            const chatIndex = updatedChats.findIndex((chat) => chat.chatId === messageObject.chatId)
            updatedChats[chatIndex] = {
                chatId: messageObject.chatId,
                messages: [...updatedChats[chatIndex].messages, {
                    body: {
                        timestamp: Date.now(),
                        idMessage: res.idMessage,
                        messageData: {
                            typeMessage: "textMessage",
                            textMessageData: {
                                textMessage: messageObject.message
                            }
                        }
                    },
                }]
            };

            await localStorage.setItem('chats', JSON.stringify(updatedChats))
            return updatedChats;
        }
    )
;

export const getNotification = createAsyncThunk(
    "chats/getNotification",
    async ({idInstance, apiTokenInstance}: { idInstance: string, apiTokenInstance: string }, thunkAPI) => {
        const {chats} = thunkAPI.getState() as RootState
        const res = await GreenAPI.getNotification(idInstance, apiTokenInstance)

        const updatedChats: ChatT[] = [...chats.chats]
        const chatIndex = updatedChats.findIndex((chat) => chat.chatId === res.body.senderData.chatId)
        updatedChats[chatIndex] = {
            ...updatedChats[chatIndex],
            messages: [...updatedChats[chatIndex].messages, res]
        };

        await localStorage.setItem('chats', JSON.stringify(updatedChats))
        return updatedChats;
    }
);