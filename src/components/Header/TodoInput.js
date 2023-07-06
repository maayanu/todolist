import React from "react";

function TodoInput({handleChange,AddTodo,input}) {

  return (
    <div>
      <input
        className="input"
        type="text"
        value={input}
        placeholder="Add a todo.."
        onChange={handleChange}
      />

      <button className="add-button" onClick={AddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;












// import React from "react";

// function TodoInput({ addTodo, input, setInput }) {

//   const changeInput = (e) => {
//     e.preventDefaulte();
//     setInput(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         className="input"
//         name="todo"
//         type="text"
//         value={input}
//         onChange={changeInput}
//         placeholder="Add a todo.."
//       />
//       <button className="add-button" onClick={addTodo}>
//         Add
//       </button>
//     </div>
//   );
// }

// export default TodoInput;
