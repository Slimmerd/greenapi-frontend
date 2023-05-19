import React, { ReactNode } from 'react';
import styles from './errorField.module.css';

const ErrorField = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.main}>
            <span>{children}</span>
        </div>
    );
};

export default ErrorField;