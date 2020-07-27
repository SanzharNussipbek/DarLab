import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Home.scss';
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/input/Input"

interface FormError {
    isEmpty?: boolean,
    isInvalid?: boolean
}
interface UserFormError {
    firstname: FormError,
    lastname: FormError
}

export const Home: React.FunctionComponent = () => {

    const [userInfo, setUserInfo] = useState<{firstname: string; lastname: string;} | null>(null);

    const history=useHistory();
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInfo?.firstname){
            history.push("/chat")
        }
      };
      
    const changeHandler = (field: 'firstname' | 'lastname', value: string) => {
        
        const newVal = {
            ...userInfo,
            [field]: value
        };
        setUserInfo(newVal as any);
    };

    return (
        <div className="Home">
            {/* <h1>Homework</h1>
            <ul>
                <li>Chat form with button</li>
                <li>Chat messages component</li>
                <li>Container for chat messages: fix height, scroll bar, etc</li>
            </ul> */}
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <Input  name={"firstname"}
                            placeholder={"Enter your first name"}
                            required={true}
                            onChange={(value) => changeHandler('firstname', value)}/>
                </div>
                <div className="form-group">
                <Input  name={"lastname"}
                            placeholder={"Enter your last name"}
                            required={true}
                            onChange={(value) => changeHandler('lastname', value)}/>
                </div>

                <div className="btn-wrapper">
                    <Button type={'submit'} text='Log in' className="login-btn"/>
                </div>
            </form>
        </div>
    );
}