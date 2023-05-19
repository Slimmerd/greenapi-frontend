import React from 'react';
import styles from './newChat.module.css'
import InputField from "../../components/form/input-field/inputField";
import {Formik} from "formik";

const NewChatPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h1 className={styles.title}>Новый чат</h1>
                <Formik
                    initialValues={{phone: ""}}
                    validateOnChange={true}
                    // validationSchema={}
                    onSubmit={async (values) => {

                        // dispatch(
                        //     login({email: values.email, password: values.password})
                        // ).then((res) => {
                        //     if (res.payload !== undefined) {
                        //         router.replace("/feed");
                        //     } else {
                        //         setError(true);
                        //     }
                        // });
                    }}
                >
                    {({isSubmitting, handleSubmit}) => (
                        <form action="" className={styles.form} onSubmit={handleSubmit}>
                            <InputField label={'Телефон'} name={'phone'} placeholder={''}/>
                            <button type={'submit'} className={styles.button}>Создать</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default NewChatPage;
