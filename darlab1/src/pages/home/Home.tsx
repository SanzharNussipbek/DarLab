import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import './Home.scss';
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/input/Input"
import { UserInfo } from "../../types/Interfaces"
import { UserContext } from '../../services/context';

interface FormError {
    isEmpty?: boolean,
    isInvalid?: boolean
}

interface UserFormError {
    firstname: FormError,
    lastname: FormError
}

type Props = {

}

export const Home: React.FunctionComponent<Props> = () => {

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    const userContext = useContext(UserContext);

    const history=useHistory();

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInfo?.firstname){
            userContext?.setUser(userInfo);
            history.push("/videos")
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
            <form onSubmit={submitHandler} className="login-form">
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