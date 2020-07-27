import React from 'react';
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/input/Input"
import "./Chat.scss"

type Props = {

}

export const Chat: React.FunctionComponent<Props> = () => {

    const messageHandler = (value: string) => {
        console.log(value)
    }

    return (
        <div className="Chat">
            <Input name="message" required={true} placeholder="Enter message" onChange={(value)=> messageHandler(value)}/>
        </div>
    );
}