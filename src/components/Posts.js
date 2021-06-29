import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, sendLike, likePayload } from '../redux/postSlice';
import Comments from './Comments';
import Commentform from './Commentform';
import SimpleCard from './Card';
import Button from '@material-ui/core/Button';
import  IconButton  from '@material-ui/core/IconButton';
import PostCard from './PostsCard';




 


function Posts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchPosts())
        return () => {}
    }, [])



    // const handleClick = (myLikes, id) => {
    //     console.log("id", id)
    //     // setLikes(myLikes +1)
    //     // handleLike(likes, id)
       
    // }

    // const handleLike = (likes, id) => {
    //     const a = likePayload({id: id, likes: likes})
    //     dispatch(sendLike(a))
        
    // }
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
        <div >
            <h1>Posts</h1>
            <SimpleCard children={renderPosts.map((p) => p)}>
                
            </SimpleCard>
        </div>
           
            
        
    )
}
export default Posts;


