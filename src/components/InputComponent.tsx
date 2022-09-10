import React from 'react'
interface Props {
    children?: React.ReactNode,
    // onChange: React.ChangeEventHandler<HTMLInputElement>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void,
    enteredName: string,
    errorMessage: string,
    hasError: boolean,
    className: string,
    type: string,
    label: string,
    id: string,
}
const InputComponent: React.FC<Props> = ({ onChange, onBlur, enteredName, errorMessage, hasError, className, type, label, id }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }
    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        onBlur(e)
    }
    return (
        <>
            <div className={className}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={enteredName}
                />
                {hasError && <p className='error-text'>{errorMessage}</p>}
            </div>
        </>
    )
}

export default InputComponent;