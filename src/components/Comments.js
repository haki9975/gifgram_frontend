import React from 'react';
import { fetchPosts } from './asynch';
import { connect } from 'react-redux';
import { setPosts } from '../redux/commentSlice'

 function Comments() {
    return (
        <div>
            <h1>Comments</h1>
        </div>
    )
}

export default Comments;
