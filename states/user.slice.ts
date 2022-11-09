import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Router  from "next/router";
import authService from "../services/authService";


//Get user from lodal storage
let user = null;
if(typeof window !== 'undefined')
{
    user = localStorage.getItem('user');
    console.log("🚀 ~ file: user.slice.ts ~ line 9 ~ user", user)
    
}

//register
export const register = createAsyncThunk('auth/register',async(userData,thunkAPI)=>{
    console.log(userData)
    try{
        const response = await authService.register(userData);
        console.log("🚀 ~ file: user.slice.ts ~ line 16 ~ register ~ response", response)
        Router.push('/');
        return response;
    }catch(err){
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//login
export const login = createAsyncThunk('auth/login',async(userData:{email:string,password:string},thunkAPI)=>{
    console.log(userData)
    
    try{
        const response = await authService.login(userData);
        console.log("🚀 ~ file: user.slice.ts ~ line 30 ~ login ~ response", response)
        Router.push('/');
        return response;
    }catch(err){
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//logout
export const logout = createAsyncThunk('auth/logout', async ()=>{
    await authService.logout();
    Router.push('/');

})


export const userSlice = createSlice({
    name:'user',
    initialState : {
        loggedIn:false,
        user:user?user:null,
    },
    reducers:{
        toggleLoginStatus: (state)=>{state.loggedIn = !state.loggedIn},
        reset : (state)=>{state.loggedIn = false,
                            state.user = null}
    },extraReducers:(builder)=>{
        builder
            .addCase(login.pending,(state,action)=>{
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.user = action.payload ;
                state.loggedIn = true;
                console.log("Login fullfilled action payload : ",action.payload);
                
            })
            .addCase(login.rejected,(state)=>{
            })
            .addCase(register.fulfilled,(state,action)=>{
                console.log("Action payload : ",action.payload)
                state.user = action.payload;
            })
            .addCase(register.rejected,(state,action)=>{
                console.log("Rejected ", action.payload);
            })
            .addCase(logout.fulfilled,(state)=>{
                state.user = null;
                state.loggedIn = false;
            })
    }
})

export const {toggleLoginStatus,reset} = userSlice.actions;

export default userSlice.reducer