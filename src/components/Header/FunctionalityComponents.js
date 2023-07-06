import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoInput from "./TodoInput";
import ListTodo from "./ListTodo";

function FunctionalityComponents() {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [editInput, setEditInput] = useState("")
  const [toggle, setToggle] = useState(false);



  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const AddTodo = () => {
    const object = {
      todo: input,
      id: uuidv4(),
      completed: false,
    };
    setTodoList([...todoList, object]);
    setInput('');
  };


    const deleteTodo = (todoObject) => {
    const newTodos = todoList.filter((todo) => {
      return todo.id !== todoObject.id;
    });
    setTodoList(newTodos);
  };


  const completeTodo = (i) => {
    const updatedTasks = todoList.map(task => {
      if(task.id === i ){
        return{
          ...task,
          completed: !task.completed
        }
      }
      return task;
    })
    setTodoList(updatedTasks);
  };

  const handleEditChange = (event) => {
    event.preventDefault();
    setEditInput(event.target.value)
}


const handleUpdate = () => {
    let newList = todoList.map(todo => {
        if(todo.id === todo.id){
            todo.todo = editInput
        }
        return todo;
    })

    setTodoList(newList)
    setToggle(false)
    setEditInput("")
}


 




  return (
    <div>
      <h1 className="title">To Do App</h1>
      <TodoInput 
      AddTodo={AddTodo}
      handleChange={handleChange}
      input={input}
      />
      <ListTodo 
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      todoList={todoList}
      handleUpdate={handleUpdate}
      handleEditChange={handleEditChange}
      toggle={toggle}
      editInput={editInput}
      setToggle={setToggle}
   
      
      
      />
    </div>
  );
}

export default FunctionalityComponents;
















// import React, { useState } from "react";
// import ListTodo from "../Header/ListTodo";
// import TodoInput from "../Header/TodoInput";

// function FunctionalityComponents() {
//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     if (input.trim() !== "") {
//       setTodos([...todos, input]);
//     }
//     setInput("");
//   };

//   const deleteTodo = (text) => {
//     const newTodos = todos.filter((todo) => {
//       return todo !== text;
//     });
//     setTodos(newTodos);
//   };

//   const completeTodo = (i) => {
//     const updatedTasks = [...todos];
//     updatedTasks[i] = <s>{todos[i]}</s>;
//     setTodos(updatedTasks);
//   };

//   return (
//     <div>
//       <h1 className="title">React Todo App</h1>
//       <TodoInput
//       input={input}
//       setInput={setInput}
//       addTodo={addTodo}
//       />

//       <ListTodo
//         todos={todos}
//         deleteTodo={deleteTodo}
//         completeTodo={completeTodo}
//       />
//     </div>
//   );
// }

// export default FunctionalityComponents;
