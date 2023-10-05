import Input from "../Input/Input";
import { useContext, useEffect, useRef, useState } from 'react';
import DataForm from "../store/Store";
import styles from './Form.module.css'



const Form = () => {
    const formdata = useContext(DataForm);
    const [inputDataUsrName, setInputDataUsrName] = useState(false);
    const [inputDataUsrPass, setInputDataUsrPass] = useState(false);
    const [fomIsValid, setFormIsValid] = useState(false);


    useEffect(() => {
        if (inputDataUsrName && inputDataUsrPass) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }

    },
        [inputDataUsrName, inputDataUsrPass])




    const checkisvalid = (type, value) => {
        if (type == 'text') {
            setInputDataUsrName(value)
        } else {
            setInputDataUsrPass(value)
        }

    }

    const SubmitHandler = (e) => {
    }









    return (
        <DataForm.Provider value={DataForm}>
            <form onSubmit={SubmitHandler} className={styles.form}>

                {formdata.map((data) => <Input checkisvalid={checkisvalid} key={data.id} data={data} />)}

                <div style={{ textAlign: "right" }}>
                    <button className={styles.btn} type='sumbit' disabled={!fomIsValid} > Submit </button>
                </div>

            </form>
        </DataForm.Provider>


    );
}
export default Form;
