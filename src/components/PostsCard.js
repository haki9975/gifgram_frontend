import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import {  sendLike, likePayload, fetchPosts } from '../redux/postSlice';
import Button from '@material-ui/core/Button';
import Comments from './Comments';
import Commentform from './Commentform';

function PostCard(props){
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const [formBool, setFormBool] = useState(false)
    const [counter, setCounter] = useState(props.likes)

    const handleClick = ( ) => {
        console.log("conter", counter)
        setCounter(counter + 1)
        //  console.log("props",props.likes)
         console.log(counter +1, "counter")
        //  handleLike(counter + 1)
        const a = likePayload({id: props.id, likes: counter+1})
        
        dispatch(sendLike(a))
       
    }

    useEffect(() => {
      
        return () => {
            
        }
    }, [counter])

    // const handleLike = (likes) => {
    //     console.log(likes, "sss", props.id)
    //     const a = likePayload({id: props.id, likes: likes})
    //     dispatch(sendLike(a))
        
    // }


    return(
        <div key={props.id} id={props.id}> 

          <h1 >{props.username}</h1><br></br>
          <img src={props.image} alt="A beautiful scene" width="500" height="500"></img>
          <div><p>{props.likes} people like this</p><Button color="secondary"  onClick={() => { handleClick() }}>+</Button></div>
        
          <h1>Comments</h1>
          <div>{props.comments.map((c) => (<Comments username={c.username} body={c.body} date={c.date} key={c.id} id={props.id}></Comments>))}</div>
          <div className="commentFormDiv">
          <Button variant="contained" color="primary"  onClick={() => setFormBool( !formBool )}>Add Comment</Button>
          {formBool ? <Commentform id={props.id} ></Commentform> : formBool }
          </div>
        </div>
    )

}
export default PostCard





 







