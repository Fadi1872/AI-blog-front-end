import './NumCard.css'

function NumCard({number, subtext}) {
    return (
        <div className='fa_NumCard '>
            <p className='title-2 mb-0 text-white'>{number}<span className=''>+</span></p>
            <p className='mb-0 text-gray-60'>{subtext}</p>
        </div>
    )
}

export default NumCard