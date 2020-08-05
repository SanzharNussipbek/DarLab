import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Room.scss"
import { Chat } from "../chat/Chat"
import { RoomHeader } from "../../components/roomHeader/RoomHeader"
import { UserContext } from '../../services/context';

import YouTube from 'react-youtube'
import CopyToClipboard from 'react-copy-to-clipboard';

import { IconButton } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import StopIcon from '@material-ui/icons/Stop';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Forward10Icon from '@material-ui/icons/Forward10';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FileCopyIcon from '@material-ui/icons/FileCopy';

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

                        <CopyToClipboard text={player?.getVideoUrl()}>
                            <IconButton>
                                <FileCopyIcon fontSize='large' style={{ color: '#1F2833' }}/>
                            </IconButton>
                        </CopyToClipboard>

                        <IconButton onClick={muteVideo}>
                            { playerMuteState !== PlayerMuteStates.MUTED ? <VolumeUpIcon fontSize='large' style={{ color: '#1F2833' }}/> : <VolumeOffIcon fontSize='large' style={{ color: '#1F2833' }}/>}
                        </IconButton>

                        <IconButton onClick={skipBack}>
                            <SettingsBackupRestoreIcon fontSize='large' style={{ color: '#1F2833' }}/>
                        </IconButton>

                        <IconButton onClick={toggleVideo}>
                            { playerPlayState !== PlayerPlayStates.PLAYING ? <PlayCircleFilledWhiteIcon fontSize='large' style={{ color: '#1F2833' }}/> : <PauseCircleFilledIcon fontSize='large' style={{ color: '#1F2833' }}/> }
                        </IconButton>

                        <IconButton onClick={skipForward}>
                            <Forward10Icon fontSize='large' style={{ color: '#1F2833' }}/>
                        </IconButton>

                        <IconButton onClick={stopVideo}>
                            <StopIcon fontSize='large' style={{ color: '#1F2833' }}/>
                        </IconButton>

                        <a href={player?.getVideoUrl()} target="_blank">
                            <IconButton size='medium'>
                                <YouTubeIcon fontSize='large' style={{ color: '#1F2833' }}/>
                            </IconButton>
                        </a>

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