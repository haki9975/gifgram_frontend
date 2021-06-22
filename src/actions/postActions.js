import { FETCH_POSTS, NEW_POST, NEW_COMMENT } from './types';

export const fetchPosts = () => {
        fetch('https://localhost3000/posts')
            .then(response => response.json())
                .then (data => dispatch({
                    type: FETCH_POSTS,
                    payload: data
                }))
    
}

export const sendPosts = () => {
    fetch('https://localhost3000/posts/new')
        .then(response => response.json())
            .then (data => dispatch({
                type: NEW_POST,
                payload: data
            }))

}