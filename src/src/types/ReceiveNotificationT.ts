export type ReceiveNotificationT = {
    receiptId?: number
    body: BodyT
}

type BodyT = {
    typeWebhook?: string
    instanceData?: {
        idInstance: number
        wid: string
        typeInstance: string
    }
    timestamp: number
    idMessage: string
    senderData?: {
        chatId: string
        sender: string
        senderName: string
    }
    messageData: {
        typeMessage: string
        textMessageData: {
            textMessage: string
        }
    }
}