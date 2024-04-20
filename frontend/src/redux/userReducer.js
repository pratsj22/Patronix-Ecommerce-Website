import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name:'user',
    initialState:{
        user:null,
        token:""
    },
    reducers:{
        userLogin:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
        },
        userLogout:(state,action)=>{
            state.user=null;
            state.token="";
        }
    }
})

export const {userLogin,userLogout}= userSlice.actions

export default userSlice.reducer