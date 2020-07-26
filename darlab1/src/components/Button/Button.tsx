import React from 'react';
import "./Button.scss"

type Props = {
    className: string,
    text: string,
    clickHandler: () => void
}

export const Button: React.FunctionComponent<Props> = ({text, className, clickHandler}) => {
    return (
        <button className={"btn " + className} onClick={clickHandler}>{text}</button>
    );
}