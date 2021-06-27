import React from 'react';
import Postform from './components/Postform';

function NavBar() {
    return(
        <div id="navbar">
            <Link>
                <h2 id="home">Home</h2>
            </Link>
            <Link>
                <h2 id="posts">View Posts</h2>
            </Link>
            <Link>
                <h2 id="newPost">Add Post</h2>
            </Link>
        </div>
    )
}

export default NavBar