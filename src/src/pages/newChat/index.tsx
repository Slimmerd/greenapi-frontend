import React from 'react';
import styles from './newChat.module.css'
import InputField from "../../components/form/input-field/inputField";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {startChat} from "../../redux/thunks/chatsThunk";
import {useNavigate} from "react-router-dom";

const NewChatPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h1 className={styles.title}>Новый чат</h1>
                <Formik
                    initialValues={{phone: ""}}
                    validateOnChange={true}
                    // validationSchema={}
                    onSubmit={async (values) => {
                        const chatId = values.phone.replace('+', '') + '@c.us'
                        dispatch(
                            startChat({chatId: chatId})
                        ).then((res) => {
                            if (res.payload !== undefined) {
                                navigate(`/chat/${chatId}`);
                            }
                        });
                    }}
                >
                    {({isSubmitting, handleSubmit}) => (
                        <form action="" className={styles.form} onSubmit={handleSubmit}>
                            <InputField label={'Телефон'} name={'phone'} placeholder={''}/>
                            <button type={'submit'} className={styles.button} disabled={isSubmitting}>Создать</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default NewChatPage;
