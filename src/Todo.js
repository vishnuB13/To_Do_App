import { green } from '@material-ui/core/colors'
import React from 'react'

const Todo = ({toDos,setTodos}) => {

    
  return (
    <div className="todos">
    {
     toDos.map((value)=>{
       return( <div className="todo">
       <div className="left">
         <input onChange={(e)=>{
          setTodos(toDos.filter(item=>{
           if(item.id===value.id){
             item.status=e.target.checked
           }
           return item
          }))
         }} value={value.status} type="checkbox" name="" id="" />
         <p>{value.text}</p>
       </div>
       <div className="right">
         <i onClick={()=>{
           setTodos(toDos.filter((item)=>
             item.id!==value.id
           ))
         }} className="fa fa-times" ></i>
       </div>
     </div>)
     })
    }
   </div>
  )
}

export default Todo