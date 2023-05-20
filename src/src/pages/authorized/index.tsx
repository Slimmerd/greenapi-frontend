import React from 'react';
import styles from './authorized.module.css'
import useIsAuth from "../../utils/useIsAuth";

const AuthorizedPage = () => {

    // if (!useIsAuth()){
    //     return (
    //         <>
    //             Loading...
    //         </>
    //     )
    // }

    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h1>Чтобы воспользоваться сервисом:</h1>
                <ul>
                <li>Выбери открытый чат слева</li>
                <li>Создай новый чат</li>
                </ul>
            </div>
        </div>
    );
};

export default AuthorizedPage;
