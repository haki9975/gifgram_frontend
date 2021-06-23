import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts, newPosts } from '../actions/postActions'

function Posts() {
    const postItems = this.state.posts.map(post => (
        <div key={post.id}>
            <h3>{post.username}</h3>
            <img src={post.image}></img>
        </div>
    ))
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}

export default connect(null, { fetchPosts })(Posts)
