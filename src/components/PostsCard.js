import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, sendLike, likePayload } from '../redux/postSlice';
import Button from '@material-ui/core/Button';
import Comments from './Comments';
import Commentform from './Commentform';

function PostCard(props){
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const [counter, setCounter] = useState()

    const handleClick = (myLikes, id) => {
        console.log("id", id)
        // setLikes(myLikes +1)
        // handleLike(likes, id)
       
    }

    // const handleLike = (likes, id) => {
    //     const a = likePayload({id: id, likes: likes})
    //     dispatch(sendLike(a))
        
    // }


    return(
        <div key={props.id} id={props.id}> 

          <h1 >{props.username}</h1><br></br>
          <img src={props.image} alt="A beautiful scene" width="500" height="500"></img>
          <div><p>{props.likes} people like this</p><Button color="secondary"  onClick={() => handleClick(props.likes, props.id)}>+</Button></div>
        
          {/* <h1>Comments</h1>
          <div>{props.comments.map((c) => (<Comments username={c.username} body={c.body} date={c.date} key={c.id} id={p.id}></Comments>))}</div>
          <div className="commentFormDiv">
          <Button variant="contained" color="primary"  onClick={() => setFormBool( !formBool )}>Add Comment</Button>
          {formBool ? <Commentform id={p.id} ></Commentform> : console.log(formBool) }
          </div> */}
        </div>
    )

}
export default PostCard





 







