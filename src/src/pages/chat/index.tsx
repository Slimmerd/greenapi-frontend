import React, {useEffect, useRef} from 'react';
import styles from './chatPage.module.css'
import Message from "../../components/message/message";
import {IoPerson, IoSend} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {useParams} from "react-router-dom";
import {getNotification, sendMessage} from "../../redux/thunks/chatsThunk";
import {Field, Formik} from "formik";

const ChatPage = () => {
    const {phone} = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const chatRef = useRef<HTMLDivElement>(null);


    const {chats} = useSelector((state: RootState) => state.chats)
    const user = useSelector((state: RootState) => state.profile)

    const currentChat = chats.find(chat => chat.chatId === phone)

    const currentPhone = currentChat?.chatId.replace('@c.us', '')

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getNotification({idInstance: user.IdInstance, apiTokenInstance: user.ApiTokenInstance}))
        }, 10 * 1000)

        if (chatRef.current) {
            chatRef.current.scrollIntoView({behavior: "smooth"});
        }

        return () => clearInterval(interval)
    }, [user, chats])


    if (currentChat === undefined) {
        return (
            <>
                Ошибка
            </>
        )
    }

    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className={styles.avatar}>
                    <IoPerson/>
                </div>
                <h1>+{currentPhone}</h1>
            </header>

            <div className={styles.chat}>
                {
                    currentChat.messages.map((message, i) => <Message key={i} message={message}/>)
                }
                <span ref={chatRef}/>
            </div>


            <Formik
                initialValues={{content: ""}}
                validateOnChange={true}
                // validationSchema={}
                onSubmit={async (values, {resetForm}) => {
                    dispatch(
                        sendMessage({
                            messageObject: {
                                chatId: currentChat?.chatId,
                                message: values.content
                            },
                            idInstance: user.IdInstance,
                            apiTokenInstance: user.ApiTokenInstance
                        })
                    )

                    resetForm({values: {content: ''}})
                }}
            >
                {({isSubmitting, handleSubmit}) => (
                    <form className={styles.input} onSubmit={handleSubmit}>
                        <Field id={'content'} name={'content'}/>
                        <button type={'submit'} disabled={isSubmitting}>
                            <IoSend size={20}/>
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ChatPage;
