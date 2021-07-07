import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Comments from './Comments'
import { fetchComments } from '../redux/commentSlice';
import CommentForm from './Commentform'
import SimpleCard from './Card';

function CommentsCard(props){
    const posts = useSelector(state => state.posts)
   const dispatch = useDispatch()
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
        
        <SimpleCard children={renderComments.map(c => c)}/>
    </div>
    )
}

export default CommentsCard


