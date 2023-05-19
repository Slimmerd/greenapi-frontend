import React from 'react';
import {IoPerson} from "react-icons/io5";
import styles from './chat.module.css'

const ChatCard = () => {
    return (
        <div className={styles.main}>
            <div className={styles.avatar}>
                <IoPerson/>
            </div>
            <div className={styles.body}>
                <div className={styles.heading}>
                    <div className={styles.title}>
                        <span>+9999</span>
                    </div>
                    <div className={styles.date}>
                        <span>05.05.2005</span>
                    </div>
                </div>
                <div className={styles.message}>
                    <span>Last message...</span>
                </div>
            </div>
        </div>
    );
};

export default ChatCard;
