import { useState } from "react";
import "./App.css"
import TodoInput from "./componants/TodoInput";
import TodoList from "./componants/TodoList";


const App = () => {
  const [listTodo,setListTodo] = useState([]);

  let addList = (inputText)=>{
    if(inputText!=="")
    setListTodo([...listTodo,inputText])
  }

  let deleteTodo = (key)=>{
    let newListTodo = [...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div>
      <div className="main-container">
        <div className="center-container">
            <TodoInput addList ={addList}/>
            <h1 className="app-heading">TODO</h1>
            <hr />
            {listTodo.map((listItem,i)=>{
              return (
              <TodoList key = {i}  item={listItem} deleteTodo = {deleteTodo}/>
              )
            })}
        </div>
      </div>
    </div>
  );
};


export default App;
