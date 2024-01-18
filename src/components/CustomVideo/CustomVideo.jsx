import { useRef, useState } from 'react'
import './CustomVideo.css'
import play from './../../assets/icons/play.svg'

function CustomVideo({ video }) {

    const [watched, setwatched] = useState(false);
    const vid = useRef(0);

    const handleplay = () => {
        setwatched(true);
        vid.current.play();
    }

    let vidDuration = Number(vid.current.duration);
    let duration = `${Math.floor(vidDuration/60)}:${vidDuration%60 < 10 ? `0${Math.floor(vidDuration%60)}` :Math.floor(vidDuration%60)}`

    return ( 
        <div className='fa_CustomVideo position-relative'>
            <video src={video} controls={watched} ref={vid}>user video</video>
            <div className={`fa_customVideo-play_button ${watched && 'd-none'}`}>
                <img src={play} alt="play icon" onClick={handleplay} className='cursor' />
                <p className='mb-0 sub_title-125 text-gray-50'>{duration}min</p>
            </div>
        </div>
    )
}

export default CustomVideo