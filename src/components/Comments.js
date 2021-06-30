import React from 'react';
import { useSelector } from 'react-redux'
import SimpleCard from './Card';
import CommentsCard from './CommentsCard'



 function Comments(props) {

   
    return (
        <div>
        
        <SimpleCard >
        <div key={props.id}>
           <p>Username: {props.username}</p>
            <p>Comment: {props.body}</p>
        </div>
        </SimpleCard>
        </div>
    )
}

export default Comments;
