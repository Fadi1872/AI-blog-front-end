import { useRef, useState } from 'react'
import './CustomVideo.css'
import play from './../../assets/icons/play.svg'

function CustomVideo({ video, podcast, episode }) {

    const [watched, setwatched] = useState(false);
    const [duration, setdurationV] = useState('00:00');
    const vid = useRef(null);

    const handleplay = () => {
        setwatched(true);
        vid.current.play();
    }

    const handleVideo = () => {
        let vidDuration = Number(vid.current.duration);
        setdurationV(`${Math.floor(vidDuration/60)}:${vidDuration%60 < 10 ? `0${Math.floor(vidDuration%60)}` :Math.floor(vidDuration%60)}`)
        console.log(duration);
    }

    return (  
        <div className={`fa_CustomVideo position-relative ${podcast && 'fa_podcast-vid'} ${episode && 'fa_episod-vid'}`}>
            <video src={video} controls={watched} ref={vid} onLoadedMetadata={handleVideo}>user video</video>
            <div className={`fa_customVideo-play_button ${watched && 'd-none'}`}>
                <img src={play} alt="play icon" onClick={handleplay} className='cursor fa_play-video_icon' />
                <p className='mb-0 sub_title-125 text-gray-50'>{duration} min</p>
            </div>
        </div>
    )
}

export default CustomVideo