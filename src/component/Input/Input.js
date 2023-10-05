import styles from './Input.module.css'
import { useState } from 'react';
const Input = (props) => {



    let { type, id, label } = props.data;
    const [inputDataUsrName, setInputDataUsrName] = useState(false);
    const [inputDataUsrPass, setInputDataUsrPass] = useState(false);
    const [inputDataUsrNameTouched, setInputDataUsrNameTouched] = useState(false);
    const [inputDataUsrPassTouched, setInputDataUsrPassTouched] = useState(false);
    let inputStyle;
    const OnBlurHandler = (event) => {
        let reg = /[A-Z]/;
        let value = event.target.value
        if (type == 'text') {
            setInputDataUsrNameTouched(true)
            if (value.trim().length > 0) {
                setInputDataUsrName(true);
                props.checkisvalid('text', true)
            } else {
                setInputDataUsrName(false);
                props.checkisvalid('text', false)
            }

        } else if (type == 'password') {

            setInputDataUsrPassTouched(true)
            if (value.length > 0 && reg.test(value)) {

                props.checkisvalid('password', true)
                setInputDataUsrPass(true)
            } else {

                props.checkisvalid('password', false)
                setInputDataUsrPass(false)
            }

        }
    }
    if (type == 'text') {
        inputStyle = `${styles.input} ${inputDataUsrName ? "" : inputDataUsrNameTouched ? styles['itnpu-error'] : ""}`;

    } else {
        inputStyle = `${styles.input} ${inputDataUsrPass ? "" : inputDataUsrPassTouched ? styles['itnpu-error'] : ""}`;

    }

    return (
        <div>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input onBlur={OnBlurHandler} className={inputStyle} id={id} type={type} />
            {
                inputDataUsrName ? "" : inputDataUsrNameTouched ? <p style={{ color: 'red' }}>please enter a valid user name</p> : ""
            }
            {
                inputDataUsrPass ? "" : inputDataUsrPassTouched ? <p style={{ color: 'red' }}>please enter a valid password</p> : ""
            }
        </div>

    );
}
export default Input;