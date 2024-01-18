import CustomVideo from '../CustomVideo/CustomVideo'
import './PodcastEpisode.css'
import video1 from './../../assets/videos/vid2.mp4'
import { Link } from 'react-router-dom'
import arrow from './../../assets/icons/arrow.svg'

function PodcastEpisode() {
    return (
        <div className='fa_episode'>
            <CustomVideo video={video1} episode />
            <div className="fa_episodtitle-conatiner">
                <p className='fa_episode-title text-white'>AI in Healthcare</p>
                <p className='mb-0  text-gray-60 sub_title-125'>Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.</p>
            </div>
            <Link className='sub_title-125 main_button text-gray-60 d-sm-inline d-block fa_width-100-xs'>
                Listen Podcast
                <img src={arrow} alt="arrow" className='fa_arrow-icon cursor ms-2' />
            </Link>
        </div>
    )
}

export default PodcastEpisode