import React from 'react';
import "./Input.scss"

type Props = {
    className: string,
    type: string,
    placeholder: string,
    changeHandler: () => void
}

export const Input: React.FunctionComponent<Props> = ({className, type, placeholder, changeHandler}) => {
    return (
        <input className={"input-field " + className} type={type} placeholder={placeholder} onChange={changeHandler}></input>
    );
}