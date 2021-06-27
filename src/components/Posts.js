import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import Comments from './Comments';
import Commentform from './Commentform';


// import Card from './Card';


 


function Posts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPosts())
        return () => {
            // console.log('unmounting posts')
        }
    }, [])

 
    return (
        <div >
            <h1>Posts</h1>
           

               {posts.map((p, i) => 
              
               <div key={p.id} id={p.id}> 
                     <h1 >{p.username}</h1><br />
                     <img src={p.image} alt="A beautiful scene"></img>
                     <div>{p.comments.map((c) => (<Comments username={c.username} body={c.body} date={c.date} key={c.id} id={p.id}></Comments>))}
                </div>
                <div>
                <Commentform id={p.id}></Commentform>
                </div>

                </div> )} 
        </div>
           
            
        
    )
}




export default Posts
