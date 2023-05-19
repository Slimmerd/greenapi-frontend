import React from 'react';
import styles from './message.module.css'

type MessageType = {
    author: number
    content: string
    date: Date
}

const Message = ({message}: { message?: MessageType }) => {
    let inbound = false
    return (
        <div className={`${styles.main} ${inbound ? styles.in : styles.out}`}>

            {/*<TailIn/>*/}
            <div className={styles.msgBlock}>
                <span className={styles.content}>Content fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfsfdsffdsfsfdsffdsfs vfdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs  fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfs fdsffdsfsfdsffdsfsfdsffdsfsfdsffdsfs fdsffdsfs</span>
                <div className={styles.date}>
                    <span>Date</span>
                </div>
            </div>
            {/*<TailOut/>*/}

        </div>
    );
};

export default Message;
