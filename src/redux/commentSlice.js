import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
        setComments(state, action) {
            return state = action.payload
        }
    }
})

export const { setComments } = commentsSlice.actions
export default commentsSlice.reducer