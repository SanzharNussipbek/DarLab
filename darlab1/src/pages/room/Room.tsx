import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Room.scss"
import YouTube from 'react-youtube'
import { Chat } from "../chat/Chat"
import { RoomHeader } from "../../components/roomHeader/RoomHeader"
import { UserContext } from '../../services/context';
import { Button } from '../../components/Button/Button';
import { FaPlayCircle, FaPauseCircle, FaFontAwesome } from 'react-icons/fa'
import { Link } from 'react-feather';

enum PlayerPlayStates {
    PLAYING = 'PLAYING',
    PAUSED = 'PAUSED',
}

enum PlayerMuteStates {
    MUTED = 'MUTED',
    UNMUTED = 'UNMUTED',
}

export const Room: React.FunctionComponent = () => {

    const { id } = useParams();

    const [player, setPlayer] = useState<any>();

    const [playerPlayState, setPlayerPlayState] = useState<PlayerPlayStates>();

    const [playerMuteState, setPlayerMuteState] = useState<PlayerMuteStates>();

    const onVideoInit = (e: {target: any}) => {
        setPlayer(e.target);
    }

    const toggleVideo = () => {
        // console.log(player);

        if (playerPlayState !== PlayerPlayStates.PLAYING) {
            player?.playVideo();
            setPlayerPlayState(PlayerPlayStates.PLAYING);
        } else if(playerPlayState === PlayerPlayStates.PLAYING) {
            player?.pauseVideo();
            setPlayerPlayState(PlayerPlayStates.PAUSED);
        }
    }

    const skipBack = () => {
        const time = player?.getCurrentTime();
        player?.seekTo(time-10);
    }

    const skipForward = () => {
        const time = player?.getCurrentTime();
        player?.seekTo(time+10);
    }

    const stopVideo = () => {
        player?.stopVideo();
    }

    const muteVideo = () => {
        console.log(player);

        if (playerMuteState !== PlayerMuteStates.MUTED) {
            player?.mute();
            setPlayerMuteState(PlayerMuteStates.MUTED);
        } else if(playerMuteState === PlayerMuteStates.MUTED) {
            player?.unMute();
            setPlayerMuteState(PlayerMuteStates.UNMUTED);
        }
    }

    return (
        <div className="Room">
            <div className="room-header">
                <RoomHeader/>
            </div>

            <div className="room-body">
                <div className="video-wrapper">
                    <YouTube videoId={id} containerClassName="video" onReady={onVideoInit}/>
                    
                    <div className="video-controls">
                        <Button text='-10s' type='button' clickHandler={skipBack} />
                        <Button text={playerMuteState !== PlayerMuteStates.MUTED ? 'Mute' : 'Unmute' } type='button' clickHandler={muteVideo} />
                        <Button text={playerPlayState !== PlayerPlayStates.PLAYING ? 'Play' : 'Pause' } type='button' clickHandler={toggleVideo}/>
                        <Button text='Stop' type='button' clickHandler={stopVideo} />
                        <Button text='+10s' type='button' clickHandler={skipForward} />
                    </div>

                    <div className="youtube-link-wrapper">
                        <a href={player?.getVideoUrl()} target="_blank">See on Youtube</a>
                    </div>

                </div>

                <div className="chat-wrapper">
                    <UserContext.Consumer>
                        {(value) => (
                            <Chat user={value?.user}/>
                        )}
                    </UserContext.Consumer>
                </div>
            </div>
        </div>
    );
}