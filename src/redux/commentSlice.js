import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const sendComments = createAsyncThunk(
    'sendComments',
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

export const fetchComments = createAsyncThunk(
    'comments/getComments',
    async () => {
        const response = await fetch('http://localhost:3000/comments') 
        const data = await response.json()
        return data
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendComments.fulfilled, (state, action) => {
            
        })
        builder.addCase(fetchComments.fulfilled, (state, action) =>{
            return state = action.payload
        })

    }
})

           

export default commentsSlice.reducer