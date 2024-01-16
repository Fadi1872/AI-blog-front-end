import { Row } from 'react-bootstrap'
import ReelWordsCard from '../ReelWordsCard/ReelWordsCard'
import './ReelWords.css'

import img1 from './../../assets/reviewpic1.png'

function ReelWords() {
    return (
        <div className='fa_realwords'>
            <div className="container_custom">
                <Row>
                    <ReelWordsCard
                        img={img1}
                        userName='Sarah Thompson'
                        location='San Francisco, USA'
                    />
                </Row>
            </div>
        </div>
    )
}

export default ReelWords