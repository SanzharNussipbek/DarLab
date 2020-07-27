import React from 'react';
import "./Button.scss"

type Props = {
    className?: string,
    text: string,
    type?: 'button' | 'submit' | 'reset',
    clickHandler?: () => void
}

export const Button: React.FunctionComponent<Props> = ({text, type, className, clickHandler}) => {
    return (
        <button type={type ? type : "submit"} className={"btn " + className} onClick={clickHandler}>{text}</button>
    );
}