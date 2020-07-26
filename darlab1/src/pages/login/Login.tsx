import React, { useState, useEffect } from 'react';
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import "./Login.scss"

export const Login: React.FunctionComponent = () => {

    const initialFormData = Object.freeze({
        username: "",
        password: ""
      });

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
          ...formData,
    
          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        console.log(formData);
      };

    return (
        <form className="Login" onSubmit={handleSubmit}>
            <h3 className="login-title">Login</h3>
            <input type="text" placeholder="Username" name="username" className="login-input" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" className="login-input" onChange={handleChange}/>
            <button type="submit" className="btn submit-btn">Submit</button>
        </form>
    );
}