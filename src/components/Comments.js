import React from 'react';
import Commentform from './Commentform';


 function Comments(props) {

    return (
        <div key={props.id}>
            <h1>Comments</h1>
            <p>Username: {props.username}</p>
            <p>Comment: {props.body}</p>
            <p>Date: {props.date}</p>
            <Commentform id={props.id}></Commentform>
        </div>
    )
}

export default Comments;
