import React, {InputHTMLAttributes} from 'react';
import styles from './inputField.module.css'
import {useField} from "formik";
import ErrorField from "../field-error/errorField";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: String;
    placeholder: String;
    name: String;
};
const InputField: React.FC<InputFieldProps> = ({ size: _, ...props }) => {
    const [field, { error, touched }] = useField(props);

    return (
        <div className={styles.main}>
            <label className={styles.label}>{props.label}</label>
            <input
                className={styles.input}
                {...field}
                {...props}
                id={field.name}
                placeholder={props.placeholder}
            />
            {error && touched ? <ErrorField>{error}</ErrorField> : null}
        </div>
    );
};

export default InputField;