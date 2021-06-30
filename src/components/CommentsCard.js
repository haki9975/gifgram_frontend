import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Comments from './Comments'
import { fetchComments } from '../redux/commentSlice';
import CommentForm from './Commentform'
import SimpleCard from './Card';

function CommentsCard(props){
     const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    // // const comments = useSelector(state=> state.)
    const comments = useSelector(state => state.comments)

    const filteredComments = comments.filter(c => c.post_id === props.id)

    useEffect(() => {
        dispatch(fetchComments())
        return () => {}
    }, [posts])

    let renderComments = filteredComments.map((c) => {
        
            return(
            <Comments
            id = {c.id}
            username = {c.username}
            body = {c.body}
            >
            </Comments>
            )
    })




    return(
        <div>
        {console.log(filteredComments, "okay")}
        <SimpleCard children={renderComments.map(c => c)}/>
        {/* <SimpleCard children={console.log(renderComments)} > */}
        {/* <div>
          <div> 
            {comments.map((c) => (<Comments username={props.username} body={props.body} key={c.id} id={props.id}></Comments>))}
          </div>
        </div> */}
        {/* </SimpleCard> */}
        </div>
    )
}

export default CommentsCard


