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

    const sendMessageHandler = (e: React.FormEvent) => {
        console.log(e)
    }

    return (
        <div className="Chat">
            <div className="chat-wrapper">
                <div className="chat-message-container">

                </div>
               
                <div className="chat-form-container">
                    <form onSubmit={sendMessageHandler}>  
                        <Input name="message" required={true} placeholder="Enter message" className="chat-input" onChange={(value)=> messageHandler(value)}/>
                        <Button text="Send" className="chat-send-btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
}