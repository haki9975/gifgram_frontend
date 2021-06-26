import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//import  fetchPosts  from './asynch';

export const fetchPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await fetch('http://localhost:3000/posts')
        const posts = await response.json()
        return posts
        
    }
)

export const sendPosts = createAsyncThunk(
    'posts/newPost',
    async (state) => {
        const response = await fetch('http://localhost:3000/posts',
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(state)
        })
        const posts = await response.json()
        return posts
    }

)



const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            
            return state = action.payload
        }).addCase(sendPosts.fulfilled, (state, action.payload))
    }
})


export default postsSlice.reducer