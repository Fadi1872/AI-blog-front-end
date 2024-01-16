import { Col } from 'react-bootstrap'
import './ReelWordsCard.css'

function ReelWordsCard({img, userName, location, rate ,words}) {
    return (
        <Col className='fa_realwords-container'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <img src={img} alt="user" className='fa_userwords-img' />
                </div>
                <div>
                    <p className="mb-0 title-25-5 text-white">{userName}</p>
                    <p className="mb-0 sub_title-125 text-dark-40">{location}</p>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div>
                    {words}
                </div>
            </div>
        </Col>
    )
}

export default ReelWordsCard