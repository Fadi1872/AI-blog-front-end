import { useState } from 'react';
import './InterActions.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";


function InterActions() {

    const [changeColor, setChangeColor] = useState(false)

    return (
        <div className='d-flex align-items-center sa_InterActionsDiv'>
            <div className='sa_loveAction cursor'>
                <button className='border-0 bg-transparent p-0 d-flex align-items-center'
                    onClick={() => setChangeColor(!changeColor)}>
                    {
                        (changeColor)
                            ? <FaHeart className='sa_loveIcon sa_love ' />
                            : <FaRegHeart className='sa_loveIcon text-dark-40' />
                    }
                </button>
                <p className='sa_loveText text-gray-60 mb-0'>24.5k</p>
            </div>
            <div className='sa_loveAction cursor'>
                <FaRegComment className='sa_loveIcon text-dark-40' />
                <p className='sa_loveText text-gray-60 mb-0 '>50</p>
            </div>
            <div className='sa_loveAction cursor'>
                <TbSend className='sa_loveIcon text-dark-40' />
                <p className='sa_loveText text-gray-60 mb-0 '>20</p>
            </div>
        </div>
    )
}

export default InterActions