import React from 'react'
interface Props {
    children?: React.ReactNode,
    // onChange: React.ChangeEventHandler<HTMLInputElement>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void,
    enteredName: string,
    errorMessage: string,
    hasError: boolean
}
const InputComponent: React.FC<Props> = ({ onChange, onBlur, enteredName, errorMessage, hasError }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }
    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        onBlur(e)
    }
    return (
        <>
            <input type="text" id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={enteredName}
            />
            {hasError && <p className='error-text'>{errorMessage}</p>}
        </>
    )
}

export default InputComponent;