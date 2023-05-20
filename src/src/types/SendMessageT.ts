export type SendMessageT = {
    chatId: string
    message: string
    quotedMessageId?: string
    archiveChat?: boolean
    linkPreview?: boolean
}

export type SendMessageResponseT = {
    idMessage: string
}