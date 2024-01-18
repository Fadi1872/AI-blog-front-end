import PodcastEpisode from '../PodcastEpisode/PodcastEpisode'
import SectionTitle from '../SectionTitle/SectionTitle'
import './PodcastEpisodes.css'

function PodcastEpisodes() {
    return (
        <>
            <SectionTitle
                subtitle='Stay Informed with Fresh Content'
                title='Latest Podcast Episodes' />
            <div className='bg-dark-08 overflow-hidden'>
                <div className="container_custom">
                    <div className='d-flex justify-content-between flex-wrap fa_episodes-grid'>
                        <PodcastEpisode />
                        <PodcastEpisode />
                        <PodcastEpisode />
                        <PodcastEpisode />
                        <PodcastEpisode />
                        <PodcastEpisode />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PodcastEpisodes