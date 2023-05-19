import React from 'react';
import styles from "./search.module.css";
import {IoSearch} from "react-icons/io5";

const SearchInput = () => {
    return (
        <div className={styles.main}>
            <div className={styles.icon}>
                <IoSearch/>
            </div>
            <input type="text" placeholder={'Поиск'}/>
        </div>
    );
};

export default SearchInput;
