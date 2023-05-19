import React from 'react';
import styles from './login.module.css'
import InputField from "../../components/form/input-field/inputField";
import {Formik} from "formik";

const LoginPage = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Авторизация</h1>
            <div className={styles.warning}>
                <h1>Где получить данные входа?</h1>
                <p>Зарегистрируйтесь на сайте <a href={'https://green-api.com/'}>GREEN API</a>. Затем создайте новый
                    инстанс и просмотрите информацию о нем</p>
            </div>
            <Formik
                initialValues={{IdInstance: "", ApiTokenInstance: ""}}
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
                        <InputField label={'ID Instance'} name={'IdInstance'} placeholder={''}/>
                        <InputField label={'API Token Instance'} name={'ApiTokenInstance'} placeholder={''}/>
                        <button type={'submit'} className={styles.button}>Войти</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginPage;
