import { useRef, useState } from 'react'
import './CustomVideo.css'
import playicon from './../../assets/icons/play.svg'

function CustomVideo({ video, podcast, episode, play, set, id }) {

    const [watched, setwatched] = useState(play);
    const [duration, setdurationV] = useState('00:00');
    const vid = useRef(null);

    const handleplay = () => {
        setwatched(true);
        vid.current.play();
        set(id);
    }

    const handleplayonly = () => {
        (play) ? vid.current.play() : vid.current.pause();
    }

    const handleVideo = () => {
        let vidDuration = Number(vid.current.duration);
        setdurationV(`${Math.floor(vidDuration / 60)}:${vidDuration % 60 < 10 ? `0${Math.floor(vidDuration % 60)}` : Math.floor(vidDuration % 60)}`)
    }


    return (
        <div className={`fa_CustomVideo position-relative ${podcast && 'fa_podcast-vid'} ${episode && 'fa_episod-vid'}`}>
            <video
                src={video}
                controls={watched}
                ref={vid}
                onLoadedMetadata={handleVideo}
                onLoad={handleplayonly}
                onPause={() => setwatched(false)}
            >user video</video>
            <div className={`fa_customVideo-play_button ${watched && 'd-none'}`}>
                <img src={playicon} alt="play icon" onClick={handleplay} className='cursor fa_play-video_icon' />
                <p className='mb-0 sub_title-125 text-gray-50'>{duration} min</p>
            </div>
        </div>
    )
}

export default CustomVideo