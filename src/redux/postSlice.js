import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import PostCard from '../components/PostsCard'



export const fetchPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await fetch('http://localhost:3000/posts')
        const data = await response.json()
        console.log(data ,"hello from fethPosts!") 
        return data
    }
)

export const likePayload = createAction("PATCH_LIKES")

export const sendLike = createAsyncThunk(
    'posts/addLikes',
    async (like) => {
        const response = await fetch(`http://localhost:3000/posts/${like.payload.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(like)
        })
        const data = await response.json()
        console.log(data, "hello from sendLike")
        return data
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
            console.log(action, "extra reducer!")
            return state = action.payload
        })
        builder.addCase(sendLike.fulfilled, (state, action) => {
                    
        }
    )}
})


export default postsSlice.reducer