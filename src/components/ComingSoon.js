import React from 'react'
import VideoPlayer from "react-background-video-player";
import ReactAudioPlayer from 'react-audio-player';
const ComingSoon = () =>{
    const src = "/homepage.mp4";
    const audiosrc ="/bg.ogg";
    const fontStyle = "/comingsoon-01.svg"

    return (
        <div className="video-content">
            <VideoPlayer
                className="video"
                src={src}  autoPlay={true}
                muted={true}
            />
            <ReactAudioPlayer
                src={audiosrc}
                autoPlay={true}
            />
            <div className="app-wrapper">
                <img src={fontStyle} alt="Walk the Planet Image" />
            </div>
        </div>
    )
}

export default ComingSoon