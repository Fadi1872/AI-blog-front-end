import { Col } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import './ReelWordsCard.css'

function ReelWordsCard({ img, userName, location, rate, words }) {
    return (
        <div className='fa_realwords-container'>
            <div className='d-flex justify-content-center align-items-center fa_realwords-user_gap'>
                <div>
                    <img src={img} alt="user" className='fa_userwords-img' />
                </div>
                <div>
                    <p className="mb-0 title-25-5 text-white">{userName}</p>
                    <p className="mb-0 sub_title-125 text-dark-40">{location}</p>
                </div>
            </div>
            <div className='fa_realwords-card_body position-relative'>
                <div className='fa_realword-rate'>
                    {(() => {
                        let starts = [];
                        for (let index = 1; index <= 5; index++) {
                            if (index <= rate) {
                                starts.push(<AiFillStar key={index} />)
                            } else {
                                starts.push(<AiOutlineStar key={index} />)
                            }
                        }
                        return starts;
                    }
                    )()}
                </div>
                <div>
                    <p className='mb-0 sub_title-125 text-white text-center'>{words} </p>
                </div>
            </div>
        </div>
    )
}

export default ReelWordsCard