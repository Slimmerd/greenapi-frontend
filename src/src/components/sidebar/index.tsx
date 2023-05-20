import React, {useEffect} from 'react';
import {IoChatbubble, IoLogOut, IoPerson} from "react-icons/io5";
import styles from './sidebar.module.css'
import ChatCard from "../chat";
import SearchInput from "../search";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {logout} from "../../redux/thunks/profileThunk";
import {loadChats} from "../../redux/thunks/chatsThunk";

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {chats} = useSelector((state: RootState) => state.chats)

    const logoutSidebar = () => {
        dispatch(logout())
        navigate('/login')
    }

    useEffect(() => {
        dispatch(loadChats())
    },[])

    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className={styles.avatar}>
                    <IoPerson/>
                </div>
                <div>
                    <button
                        className={styles.button}
                        onClick={() => navigate('/new')}>
                        <IoChatbubble size={20}/>
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => logoutSidebar()}>
                        <IoLogOut size={20}/>
                    </button>
                </div>
            </header>
            <SearchInput/>
            <div className={styles.chats}>
                {
                    chats.map(chat => <ChatCard key={chat.chatId} value={chat}/>)
                }
            </div>
        </div>
    );
};

export default Sidebar;
