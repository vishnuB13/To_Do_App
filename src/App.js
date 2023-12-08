import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{
           setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
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
            }} className="fas fa-times"></i>
          </div>
        </div>)
        })
       }
      </div>
    </div>





  );
}

export default App;

