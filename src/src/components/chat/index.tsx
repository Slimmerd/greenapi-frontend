import React from 'react';
import {IoPerson} from "react-icons/io5";
import styles from './chat.module.css'
import {ChatT} from "../../types/ChatT";
import dayjs from "dayjs";
import {Link} from "react-router-dom";

const ChatCard = ({value}: { value: ChatT }) => {
    const body = value.messages[value.messages.length - 1]?.body
    const messageData = body?.messageData.textMessageData.textMessage ?? 'Нет сообщений'
    const date = dayjs(body?.timestamp ?? Date.now()).format('DD.MM.YYYY')

    return (
        <Link to={`/chat/${value.chatId}`}>
            <div className={styles.main}>
                <div className={styles.avatar}>
                    <IoPerson/>
                </div>
                <div className={styles.body}>
                    <div className={styles.heading}>
                        <div className={styles.title}>
                            <span>+{value.chatId.replace('@c.us', '')}</span>
                        </div>
                        <div className={styles.date}>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className={styles.message}>
                        <span>{messageData}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ChatCard;
