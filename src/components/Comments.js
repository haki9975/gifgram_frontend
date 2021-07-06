import React from 'react';
import SimpleCard from './Card';




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
