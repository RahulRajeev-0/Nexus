import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    name:'authetication_user',
    initialState:{
        username: null,
        isAuthenticated: false,
        isAdmin:false,
    },
    reducers: {
        set_authentication:(state, action) =>{
            state.username = action.payload.username,
            state.isAuthenticated = action.payload.isAuthenticated,
            state.isAdmin = action.payload.isAdmin
        },
    }
})

export const {set_authentication} = authenticationSlice.actions
export default authenticationSlice.reducer