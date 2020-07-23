import React, { useState } from 'react';
import './Home.scss';
import { Hello } from "../../components/hello/hello"
import { Button } from "../../components/Button/Button"

export const Home: React.FunctionComponent = () => {
    const [clicked, setClicked] = useState<Boolean>();

    const [name, setName] = useState<String>("Sanzhar");

    const btnClickLoginHandler = () => { 
        console.log("Log in clicked") 
        setClicked(true);
    }

    const btnClickNameHandler = () => { 
        console.log("Change name clicked") 
    }

    return (
        <div className="Home">
            { clicked ? <Hello name={ name } /> : null}
            <Button className="login-btn" clickHandler = { btnClickLoginHandler } text="Log in"/>
            <Button className="login-btn" clickHandler = { btnClickNameHandler } text="Change name"/>
        </div>
    );
}