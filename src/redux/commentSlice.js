import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "./postSlice";
import { dispatch } from "react-redux";
import PostCard from "../components/PostsCard";
import Comments from "../components/Comments";

export const sendComments = createAsyncThunk(
    'comments/newComment',
    async (formInput) => {
        const response = await fetch('http://localhost:3000/comments',
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formInput)
        })
        const data = await response.json()
        console.log(data, "send comments")
        
        return data
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendComments.fulfilled, (state, action) => {
            console.log(state, "this is state")
            console.log(action, "this is action")
        })

    }
})


export default commentsSlice.reducer