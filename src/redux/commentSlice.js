import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        return data
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {

    }
})

export const { setComments } = commentsSlice.actions
export default commentsSlice.reducer