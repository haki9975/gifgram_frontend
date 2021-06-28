import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import Comments from './Comments';
import Commentform from './Commentform';
import SimpleCard from './Card';
import Button from '@material-ui/core/Button';




 


function Posts(props) {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const [formBool, setFormBool] = useState(false)


    useEffect(() => {
        dispatch(fetchPosts())
        return () => {}
    }, [])


    
 
    return (
        <div >
            <h1>Posts</h1>
            <SimpleCard children={ posts.map((p) => { return(
                <div key={p.id} id={p.id}> 
                 <h1 >{p.username}</h1><br></br>
                <img src={p.image} alt="A beautiful scene" width="500" height="500"></img>
               
                <h1>Comments</h1>
                <div>{p.comments.map((c) => (<Comments username={c.username} body={c.body} date={c.date} key={c.id} id={p.id}></Comments>))}

                </div>
                <div className="commentFormDiv">
                <Button variant="contained" color="primary"  onClick={() => setFormBool( !formBool )}>Add Comment</Button>
                
                {formBool ? <Commentform id={p.id}></Commentform> : console.log(formBool) }
                
                
                
                
                </div>
                     
                </div> 
            )})}>
          
            </SimpleCard>
        </div>
           
            
        
    )
}




export default Posts;
