import FeaturedVideoCard from '../FeaturedVideoCard/FeaturedVideoCard'
import './FeaturedVideos.css'
import video from './../../assets/videos/starship.mp4'
import video2 from './../../assets/videos/vid2.mp4'
import { Row } from 'react-bootstrap'
import SectionTitle_Button from '../SectionTitle_button/SectionTitle_Button'

function FeaturedVideos() {
    return (
        <>
            <SectionTitle_Button subtitle='Featured Videos' title='Visual Insights for the Modern Viewer' buttontext='View All' />
            <div className='fa_Featured-videos bg-dark-08 overflow-hidden'>
                <div className='container_custom' >
                    <Row className='fa_featured-videos_grid'>
                        <FeaturedVideoCard
                            title='Mars Exploration: Unveiling Alien Landscapes'
                            subtitle={`Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.`}
                            video={video} />
                        <FeaturedVideoCard
                            title='Blockchain Explained: A Revolution in Finance'
                            subtitle='Delve into the world of blockchain technology and its transformative impact on the financial industry.'
                            video={video2} />
                        <FeaturedVideoCard
                            title='Breaking the Silence: Mental Health Awareness in the Workplace'
                            subtitle='An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.'
                            video={video} />
                        <FeaturedVideoCard
                            title='Revolutionizing Investment Strategies'
                            subtitle='An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.'
                            video={video2} />
                    </Row>
                </div>
            </div>
        </>
    )
}

export default FeaturedVideos