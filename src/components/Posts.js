import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts, newPosts } from '../actions/postActions'

function Posts() {
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}

export default connect(null, { fetchPosts })(Posts)
