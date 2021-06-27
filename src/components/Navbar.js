import React from 'react';
import {
    BrowserRouter as Browser,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function NavBar() {
    return(
        <div id="navbar">
            <Link to="/home">
                <button id="home">Home</button>
            </Link>
            <Link to="/posts">
                <button id="posts">View Posts</button>
            </Link>
            <Link to="/post/new">
                <button id="newPost">Add Post</button>
            </Link>
        </div>
    )
}

export default NavBar