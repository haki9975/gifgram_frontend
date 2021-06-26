import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postSlice'
// import commentsReducer from './commentSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer
        // comments: commentReducer
    }
})

export default store