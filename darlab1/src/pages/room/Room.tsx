import React from 'react';
import YouTube from 'react-youtube'
import "./Room.scss"
import { Chat } from "../chat/Chat"

type Props = {
    
}

export const Room: React.FunctionComponent = () => {
    return (
        <div className="Room">
            {/* <YouTube videoId={"yimlIZEJwPY"} containerClassName="video"/> */}
            
            <div className="chat-container">
                <Chat/>
            </div>
        </div>
    );
}