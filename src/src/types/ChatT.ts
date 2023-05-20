import {ReceiveNotificationT} from "./ReceiveNotificationT";

export type ChatT = {
    chatId: string
    messages: ReceiveNotificationT[]
}