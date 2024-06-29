
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {addtodo,deletetodo} from './todolistSlice';
function Todolist(){
   let tasks = useSelector(state => state.todolist.todos)
   let dispatch = useDispatch();
   const [newtask , setNewtask] = useState([]);
   const handleNewTask = (e) =>{
    setNewtask(e.target.value)
   } 
   return(
    <>
    <div>
         <h1>todolist</h1>
         <input type = 'text' onKeyUp={ handleNewTask}/>
         <button onClick={()=>{dispatch(addtodo(newtask))}} >addtodo</button>
          {
            tasks && tasks.map((t,i)=>{
                return <li>
                          {t}&nbsp;<button onClick ={()=>{dispatch(deletetodo(i))}}> delete</button>
                       </li>    
            })  
          }
   </div>
    </>
   )
}

export default Todolist