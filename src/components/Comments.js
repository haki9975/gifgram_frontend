import React, { useEffect } from 'react';
import { fetchPosts } from './asynch';
import { connect } from 'react-redux';
import { setComments, setPosts } from '../redux/commentSlice'

 function Comments() {
//      console.log("hello from comments")
//     useEffect(() => {
//         fetchPosts()
//             .then(data => setComments(data))
//         return () => {
//             console.log("goodbye from comments")
//         }
//     }, [setComments])

    return (
        <div>
            <h1>Comments</h1>
        </div>
    )
}

export default Comments;
