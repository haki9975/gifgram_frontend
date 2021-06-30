import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import SimpleCard from './Card';
import PostCard from './PostsCard';

function Posts() {

    const posts = useSelector(state => state.posts)
    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()

        useEffect(() => {
        dispatch(fetchPosts())
        return () => {}
    }, [])
    

  const renderPosts = posts.map((p) => {
      return(  <PostCard 
            id={p.id}
            username={p.username} 
            image={p.image}
            likes= {p.likes}
            comments= {p.comments}>
        </PostCard>
    )})    
 
    return (
        <div>
            <h1>Posts</h1>
            <SimpleCard children={renderPosts.map((p) => p)} />
        </div>
    )
}
export default Posts;


