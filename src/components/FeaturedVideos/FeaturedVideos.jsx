import FeaturedVideoCard from '../FeaturedVideoCard/FeaturedVideoCard'
import './FeaturedVideos.css'
import video from './../../assets/videos/vid1.mp4'
import video2 from './../../assets/videos/vid2.mp4'
import { Row } from 'react-bootstrap'
import SectionTitle_Button from '../SectionTitle_button/SectionTitle_Button'
import FeaturedVid from '../../data/FeatturedVid'

function FeaturedVideos() {
    return (
        <>
            <SectionTitle_Button subtitle='Featured Videos' title='Visual Insights for the Modern Viewer' buttontext='View All' />
            <div className='fa_Featured-videos bg-dark-08 overflow-hidden'>
                <div className='container_custom' >
                    <Row className='fa_featured-videos_grid'>
                        {
                            FeaturedVid.map(vid => (
                                <FeaturedVideoCard
                                    key={vid.id}
                                    title={vid.title}
                                    subtitle={vid.subtitle}
                                    video={vid.vid} />
                            ))
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}

export default FeaturedVideos