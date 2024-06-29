import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
    name : 'todo',
    initialState : {
        todos:  ['gym','eating']
    },
    reducers :{
        addtodo : (state,action) =>{
              state.todos.push(action.payload)
        },
        deletetodo : (state,action) =>{
              state.todos.splice(action.payload,1)
        }
    }
})

export const {addtodo ,deletetodo} =  todolistSlice.actions;
export default todolistSlice.reducer;