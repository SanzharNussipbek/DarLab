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
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="Chat">
            <div className="room-list-container">
                <h1>Rooms</h1>
            </div>
            
            <div className="message-list-container">
                <h1>Messages</h1>
            </div>

            <div className="new-room-form-container">
                <h3>Create Room</h3>
            </div>

            <div className="send-message-form-container">
                <form onSubmit={sendMessageHandler} className="send-message-form">  
                    <input name="message" required={true} placeholder="Enter message" className="message-input" onChange={(e)=> messageHandler(e.target.value)}/>
                    <button className="message-send-btn">Send</button>
                </form>
            </div>
        </div>
    );
}