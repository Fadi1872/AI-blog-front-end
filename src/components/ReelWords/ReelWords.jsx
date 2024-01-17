import ReelWordsCard from '../ReelWordsCard/ReelWordsCard'
import './ReelWords.css'

import realwords from '../../data/realWordsData'

function ReelWords() {
    return (
        <div className='fa_realwords overflow-hidden'>
            <div className="container_custom">
                <div className='fa_realword-grid d-flex justify-content-between'>
                    {
                        realwords.map(word => (
                            <ReelWordsCard
                                key={word.id}
                                img={word.img}
                                userName={word.userName}
                                location={word.location}
                                rate={word.rate}
                                words={word.realword}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ReelWords