import React from 'react';
import "./hello.css"

export const Hello = ({name, picture, link}: {name: String, picture: string, link: string}) => {
    return (
        <div className="Hello-login-output">
            <div className = "login-output-img-link">
                <a href={link}><img src = {picture} alt="picture"></img></a>
            </div>
            <div className="login-output-msg">
                <h1>Hello, {name}!</h1>
            </div>
        </div>
    );
}