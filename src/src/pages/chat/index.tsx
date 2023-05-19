import React from 'react';
import styles from './chatPage.module.css'
import Message from "../../components/message/message";
import {IoPerson, IoSend} from "react-icons/io5";

const ChatPage = () => {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className={styles.avatar}>
                    <IoPerson/>
                </div>
                <h1>+999</h1>
            </header>

            <div className={styles.chat}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>

            <div className={styles.input}>
                <input/>
                <button>
                    <IoSend size={20}/>
                </button>
            </div>
        </div>
    );
};

export default ChatPage;
