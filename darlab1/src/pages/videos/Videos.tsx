import React, { useState, useEffect } from 'react';
import './Videos.scss';
import { getVideos } from '../../services/api'
import { Video } from '../../types/Interfaces';
import { Link } from 'react-router-dom';

type Props = {

}

export const Videos: React.FunctionComponent<Props> = () => {

    const [videos, setVideos] = useState<Video[]>([]); 

    useEffect(() => {
        getVideos()
            .then(data => setVideos(data))
    }, []);

    return (
        <div className="Videos">
            {
                videos.map((video, index) => (
                    <div className="video-item" key={index}>
                        <Link to={'/room/'+video.id}>{video.title}</Link>
                    </div>
                ))
            }
        </div>
    );
}