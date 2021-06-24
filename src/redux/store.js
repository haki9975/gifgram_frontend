import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'
import commentReducer from './commentSlice'

const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentReducer
    }
})

export default store