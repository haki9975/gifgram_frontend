import React from 'react';
// import Postform from './components/Postform';
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
                <h2 id="home">Home</h2>
            </Link>
            <Link to="/posts">
                <h2 id="posts">View Posts</h2>
            </Link>
            <Link to="/post">
                <h2 id="newPost">Add Post</h2>
            </Link>
        </div>
    )
}

export default NavBar