import React from 'react';
import { fetchPosts } from './asynch';
import { connect } from 'react-redux';
import { setPosts } from '../redux/postSlice';





function Posts() {
 
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}

export default  Posts
// connect(null, { fetchPosts })(Posts)
