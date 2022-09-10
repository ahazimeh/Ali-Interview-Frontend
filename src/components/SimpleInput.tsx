import React, { useEffect, useState } from 'react'
import useInput from '../hooks/use-input';
import { nameValidation } from '../validation';
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
    } = useInput(nameValidation);

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
            <InputComponent
                className={nameInputClasses}
                enteredName={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                errorMessage="Name must not be empty"
                hasError={nameInputHasError}
                type="text"
                label="Your Name"
                id="name"
            />
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;