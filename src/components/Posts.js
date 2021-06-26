import React, { useEffect, useState } from 'react';
//import  fetchPosts  from '../redux/asynch';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import Comments from './Comments';
// import Card from './Card';


 


function Posts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()


    useEffect(() => {
        // console.log('mounting posts')
       // fetchPosts
            // .then(data =>{ console.log(data); dispatch(setPosts(data))})
                // .catch( a => console.log(a))
            dispatch(fetchPosts())
        return () => {
            // console.log('unmounting posts')
        }
    }, [])

 
    return (
        <div >
            <h1>Posts</h1>
           

               {posts.map((p, i) => 
               <div key={p.id}> {console.log(p.comments[0].username)}
                    <h1 >{p.username}</h1><br />
                    <img src={p.image} ></img>
                    <Comments username={p.comments[0].username} date={p.comments[0].date} body={p.comments[0].body}></Comments>       
                </div> )} 
           
            
        </div>
    )
}




export default Posts
