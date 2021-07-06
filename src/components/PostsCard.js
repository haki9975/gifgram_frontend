import React, { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendLike, likePayload, fetchPosts } from '../redux/postSlice';
import Button from '@material-ui/core/Button';
import Commentform from './Commentform';
import CommentsCard from './CommentsCard'

function PostCard(props){
    const dispatch = useDispatch()
    const [formBool, setFormBool] = useState(false)
    const [counter, setCounter] = useState(props.likes)
    const [comments, setComments] = useState(props.comments)

    const handleClick = ( ) => {
       setCounter(counter + 1)
        console.log(counter +1, "counter")
        const a = likePayload({id: props.id, likes: counter+1})
        dispatch(sendLike(a))
    }
 
    
    return(
        <div key={props.id} id={props.id}> 

          <h1 >{props.username}</h1><br></br>
          <img src={props.image} alt="A beautiful scene" width="500" height="500"></img>
          <div><p>{counter} people like this</p> <h1><Button color="secondary"  variant="outlined" onClick={() => { handleClick() }}>+</Button></h1> </div>
        
          <h1>Comments</h1>
          <div> 
          
           <CommentsCard id={props.id} />
            
          </div>
          <div className="commentFormDiv">
          <Button variant="contained" color="primary"  onClick={() => setFormBool( !formBool )}>Add Comment</Button>
          {formBool ? <Commentform id={props.id} formBool={formBool} ></Commentform> : formBool }
        
          </div>
        </div>
    )

}
export default PostCard





 







