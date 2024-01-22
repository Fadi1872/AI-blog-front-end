import './PostsNav.css'
import { useState } from 'react';
import PostData from '../../data/posts';


function PostsNav({ navItems, filterItems, setItems }) {

    const 

    return (
        <div>
            <div className='sa_PostNav'>
                <div id='sa_PostNavv' className='container_custom sa_PostNavTop'>
                    <button
                        onClick={() => setItems(PostData)}>
                        All
                    </button>
                    {
                        navItems.map(item => (
                            <button key={item.id}
                                onClick={() => filterItems(item)}>
                                {item}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PostsNav