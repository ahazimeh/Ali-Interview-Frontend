import React, { useEffect, useState } from 'react'
import useInput from '../hooks/use-input';
import InputComponent from './InputComponent';
interface Props {
    children?: React.ReactNode
}
const SimpleInput: React.FC<Props> = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value) => value.trim() !== '');
    // const [enteredName, setEnteredName] = useState('');
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    // const enteredNameIsValid = enteredName.trim() !== ''
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    let formIsValid = false;
    if (enteredNameIsValid) { //add all validities 
        formIsValid = true;
    }

    const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()


        if (!enteredNameIsValid) {
            return;
        }
        console.log(enteredName)
        resetNameInput()
    }


    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <InputComponent
                    enteredName={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    errorMessage="Name must not be empty"
                    hasError={nameInputHasError}
                />
                {/* <input type="text" id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName} /> */}
                {/* {nameInputHasError && <p className='error-text'>Name must not be empty</p>} */}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;