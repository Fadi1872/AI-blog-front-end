import './UsersPics.css'

function UsersPics({users}) {
    return (
        <div className='d-flex fa_userimg-container'>
            {
                users.map((img, index) => (
                    <div key={index} className='fa_userimg'>
                        <img src={img} alt="user" className='w-100 h-100 object-fit-cover' />
                    </div>
                ))
            }
        </div>
    )
}

export default UsersPics