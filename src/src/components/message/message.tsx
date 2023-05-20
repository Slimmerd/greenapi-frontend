import React from 'react';
import styles from './message.module.css'
import {ReceiveNotificationT} from "../../types/ReceiveNotificationT";
import dayjs from "dayjs";

const Message = ({message}: { message: ReceiveNotificationT }) => {
    const date = dayjs(message?.body.timestamp ?? Date.now()).format('HH:mm DD.MM')

    return (
        <div className={`${styles.main} ${message?.receiptId !== undefined ? styles.in : styles.out}`}>

            {/*<TailIn/>*/}
            <div className={styles.msgBlock}>
                <span className={styles.content}>
                    {message?.body.messageData.textMessageData.textMessage}
                </span>
                <div className={styles.date}>
                    <span>{date}</span>
                </div>
            </div>
            {/*<TailOut/>*/}

        </div>
    );
};

export default Message;
