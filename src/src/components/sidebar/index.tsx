import React from 'react';
import {IoChatbubble, IoPerson} from "react-icons/io5";
import styles from './sidebar.module.css'
import ChatCard from "../chat";
import SearchInput from "../search";

const Sidebar = () => {

    const openNewChatModal = () => {

    }


    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className={styles.avatar}>
                    <IoPerson/>
                </div>
                <button
                    className={styles.button}
                    onClick={() => openNewChatModal()}>
                    <IoChatbubble size={20}/>
                </button>
            </header>
           <SearchInput/>
            <div className={styles.chats}>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            </div>
        </div>
    );
};

export default Sidebar;
