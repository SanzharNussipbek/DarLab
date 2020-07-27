import React, {useState, useEffect} from 'react';
import "./Input.scss"

type Props = {
    name: string,
    placeholder: string,
    required?: boolean,
    onChange?: (val: string) => void;
}

export const Input: React.FunctionComponent<Props> = ({ name, placeholder, required, onChange}) => {

    const [inputValue, setInputValue] = useState<string>('')
    const [inputChanged, setInputChanged] = useState<boolean>(false)
    const [inputError, setInputError] = useState<{isEmpty?: boolean; isInvalid?: boolean}>({})

    const changeHandler = (value: string) => {
        setInputValue(value)
        if(onChange){
            onChange(value);
        }
    };

    useEffect(() => {
        setInputChanged(true);

        if(!inputChanged) return;

        if(required && !inputValue) {
            setInputError({
                isEmpty: true
            });
            return;
        }

        if(inputValue.match(/\s/g)) {
            setInputError({
                isInvalid: true,
                isEmpty: false
            });
            return;
        }

        setInputError({
            isEmpty: false,
            isInvalid: false
        });
    }, [inputValue]);

    return (
        <div className="Input">
            <input type="text"
                    name={name} 
                    className="input-field"
                    placeholder={placeholder} 
                    onChange={(e) => changeHandler(e.target.value)}></input>
            <div className="form-error">
                { inputError.isEmpty ? "This field is required" : ''}
                { inputError.isInvalid ? "Entered value is invalid" : ''}
            </div>
        </div>
    );
}