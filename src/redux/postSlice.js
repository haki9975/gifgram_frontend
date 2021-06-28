import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Posts from '../components/Posts'



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
    async (formInput) => {
        const response = await fetch('http://localhost:3000/posts',
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formInput)
        })
        const data = await response.json()
        return data
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
        })
        // .addCase(sendPosts.fulfilled, (state, action))
        // console.log(action.payload)
        // return action.payload
    }
})


export default postsSlice.reducer