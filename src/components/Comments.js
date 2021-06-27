import React from 'react';



 function Comments(props) {

    return (
        <div key={props.id}>
           <p>Username: {props.username}</p>
            <p>Comment: {props.body}</p>
            <p>Date: {props.date}</p><br />
            <p>--------------------------------</p>
            
        </div>
    )
}

export default Comments;
