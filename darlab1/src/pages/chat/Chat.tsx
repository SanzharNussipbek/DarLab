import React, { useState, useEffect, useReducer } from 'react';
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/input/Input"
import { ChatMessages } from "./chat-messages/ChatMessages"
import "./Chat.scss"
import { UserInfo } from "../../types/Interfaces";
import { useWebSocket, chatStateReducer, ChatActions } from "../../services/chat"
import { Smile } from 'react-feather'
import { BaseEmoji, Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css';

type Props = {
    user?: UserInfo | null;
}

export const Chat: React.FunctionComponent<Props> = ({user}) => {

    const[state, dispatch] = useReducer(chatStateReducer, {messages: []});

    const [message, setMessage] = useState<string>('');

    const socketClient = useWebSocket({
        userId: user?.firstname
    });

    const messageHandler = (value: string) => {
        setMessage(value)
    }

    const messageSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        socketClient.sendMessage(message);
    }

    const onMessage = ({data} : {data: string}) => {
        console.log(data);
        dispatch ({
            type: ChatActions.ADD_MESSAGE,
            payload: data,
        })
    }

    useEffect(() => {
        socketClient.open();
        socketClient.eventEmitter.on('message', onMessage);

        return () => {
            socketClient.eventEmitter.off('message', onMessage);
            socketClient.close();
        }
    },[]);

    const [showEmojiPicker, setShowEmojiPicker] = useState<Boolean>(false);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }
    
    const addEmoji = (emoji: BaseEmoji) => {
        setMessage(`${message}${emoji.native}`);
        setShowEmojiPicker(false);
    }

    return (
        <div className="Chat">
            <div className="message-list-container">
                <ChatMessages messages={ state.messages }/>
                { showEmojiPicker ? ( <Picker set="apple" onSelect={ addEmoji } /> ) : null }
            </div>

            <div className="send-message-form-container">
                <form onSubmit={messageSubmit} className="send-message-form">
                    <div className="form-input">
                        <Input name="message" value={message} required={true} placeholder="Type a message and hit ENTER" className="message-input" onChange={(value)=> messageHandler(value)}/>
                        <button type="button" className="toggle-emoji" onClick={toggleEmojiPicker}>
                            <Smile />
                        </button>  
                    </div>
                    <Button text="Send" className="message-send-btn"/>
                </form>
            </div>
        </div>
    );
}