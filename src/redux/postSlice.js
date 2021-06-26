import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//import  fetchPosts  from './asynch';

export const fetchPosts = createAsyncThunk(
    'posts/requestStatus',
    async () => {
        const response = await fetch('http://localhost:3000/posts')
        const posts = await response.json()
        return posts
        
    }
)

export const sendPosts = createAsyncThunk(
    
)



const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            
            return state = action.payload
        })
    }
})

// export const { setPosts } = postsSlice.actions
export default postsSlice.reducer