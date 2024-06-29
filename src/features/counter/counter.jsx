import React from "react";
import {useSelector , useDispatch} from 'react-redux';
import { decrement, increment, reset } from "./counterSlice";

function Counter(){
    let count = useSelector(state=> state.counter.count);
    let dispatch = useDispatch()
    return (<>
        <div>counter : {count}</div>
        <button onClick={()=>{dispatch(increment())}} >inc</button>   
        <button onClick={()=>{dispatch(decrement())}}>dec</button>
        <button onClick={()=>{dispatch(reset())}}>rst</button>
        </>
    )
}

export default Counter ;