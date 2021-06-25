import React, { useEffect, useState } from 'react';
// import { fetchPosts } from './asynch';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../redux/postSlice';


 


function Posts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log('mounting posts')
        fetch("http://localhost:3000/posts")
            .then(r => r.json())
            .then(data =>{ console.log(data); dispatch(setPosts(data))})
                .catch( a => console.log(a))
            
        return () => {
            console.log('unmounting posts')
        }
    }, [])

 
    return (
        <div>
            <h1>Posts</h1>
            <ul>
               <div>{posts.map((p) => <h1>{p.username}</h1>)} </div> <br />
               <div>{posts.map((p) => <img src={p.image}></img> )}</div>
            </ul>
        </div>
    )
}




export default Posts
