import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name :'counter' ,
    initialState :{
        count : 1
    },
    reducers : {
        increment : (state ,actions)=>{
            state.count++;

        },
        decrement : (state,actions)=>{
            state.count--;
        },
        reset : (state,action)=>{
            state.count = 0 ;
        }
    }
})
export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;