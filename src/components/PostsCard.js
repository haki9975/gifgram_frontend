import React, { useState }  from "react";
import {  useDispatch } from "react-redux";
import { sendLike, likePayload } from '../redux/postSlice';
import Button from '@material-ui/core/Button';
import Comments from './Comments';
import Commentform from './Commentform';

function PostCard(props){
    const dispatch = useDispatch()
    const [formBool, setFormBool] = useState(false)
    const [counter, setCounter] = useState(props.likes)

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
          <div><p>{counter} people like this</p><Button color="secondary"  onClick={() => { handleClick() }}>+</Button></div>
        
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





 







