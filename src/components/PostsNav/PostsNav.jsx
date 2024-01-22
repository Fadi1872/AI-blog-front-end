import './PostsNav.css'
import { useState } from 'react';
import PostData from '../../data/posts';
import { NavLink } from 'react-bootstrap';

function PostsNav({ navItems, filterItems, setItems }) {
    
    return (
        <div>
            <div className='sa_PostNav'>
                <div id='sa_PostNavv' className='container_custom sa_PostNavTop'>
                    <button
                    // style={({ isActive}) => {
                    //     return {
                    //       border: isActive ? "1px solid var(--Dark-15, #262626)" : "1px solid var(--dark-15)",
                    //       color: isActive ? "white" : "var(--gray-60)",
                    //       background: isActive ? "var(--dark-10)" : "transparent",
                    //     };
                    //   }}
                        onClick={() => setItems(PostData)}>
                        All
                    </button>
                    {
                        navItems.map(item => (
                            <button
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