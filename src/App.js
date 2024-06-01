import React from 'react';
import './App.css';
import { useState } from 'react';
import Todo from './Todo';
import { red } from '@material-ui/core/colors';


function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  return (

    <div className='border'>
      <div className="app">
        <h1 style={{color:"greenyellow",textAlign:"center"}}>To-Do-List</h1> 
      <div className='ver'>
      <div className="put ">
        <input value={toDo} onChange={(e) => {
          setTodo(e.target.value)
        }} type="text" placeholder="🖊️ Add item..."  style={{ color: "white" }}/>
        <i onClick={() => {
          setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
        }} className="fa fa-plus mer"></i>
      </div>
      </div>
     
      <Todo toDos={toDos} setTodos={setTodos}/>
    </div>
    </div>
  );
}

export default App;

