import React from 'react';
import styles from './login.module.css'
import InputField from "../../components/form/input-field/inputField";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {login} from "../../redux/thunks/profileThunk";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

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

                    dispatch(
                        login({IdInstance: values.IdInstance, ApiTokenInstance: values.ApiTokenInstance})
                    ).then((res) => {
                        if (res.payload !== undefined) {
                            navigate("/")
                        }
                    });
                }}
            >
                {({isSubmitting, handleSubmit}) => (
                    <form action="" className={styles.form} onSubmit={handleSubmit}>
                        <InputField label={'ID Instance'} name={'IdInstance'} placeholder={''}/>
                        <InputField label={'API Token Instance'} name={'ApiTokenInstance'} placeholder={''}/>
                        <button type={'submit'} className={styles.button} disabled={isSubmitting}>Войти</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginPage;
