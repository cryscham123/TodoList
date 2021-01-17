import React, {useState,useRef} from 'react';
import './input.scss';

const Input = ({ onAdd }) => {
    const useInput = (initialValue, validator) => {
        const [value, setValue] = useState(initialValue);
        const error = useRef();
        const onChange = event => {
            const { target: { value } } = event
            let willUpdate = true;
            if (typeof validator === "function") {
                willUpdate = validator(value);
            }
            if (willUpdate) {
                setValue(value);
                error.current.style.opacity = 0;
            } else {
                error.current.style.opacity = 1;
            }
        }
        return { value, onChange, error, setValue };
    }
    const maxLen = (value) => value.length <= 15;
    const name = useInput("", maxLen);
    const formRef = useRef();
    const inputRef = useRef();
    const handleAdd = event => {
        event.preventDefault();
        let title = inputRef.current.value
        title && onAdd(title);
        name.setValue("");
    }
    return (
        <>
            <form ref={formRef} onSubmit={handleAdd} className="form">
                <label className="form__label">Input Habit</label>
                <div className="form__input">
                    <input
                        className="form__input__input"
                        placeholder="15 texts limit..."
                        value={name.value}
                        onChange={name.onChange}
                        ref={inputRef}
                    ></input>
                    <h6 ref={name.error} className="form__input__error">Less Than 15 Texts Please...</h6>
                </div>
                <button className="form__button" type="submit">Add</button>
            </form>
            
        </>
    );
}

export default React.memo(Input);