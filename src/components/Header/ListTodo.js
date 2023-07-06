import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LuEdit } from "react-icons/lu";
import { MdDone } from "react-icons/md";

function ListTodo({
  deleteTodo,
  completeTodo,
  todoList,
  toggle,
  handleEditChange,
  editInput,
  setToggle,
  handleUpdate,
}) {
  return (
    <div className="list-todo">
      {todoList.map((task, index) => {
        const number = index + 1;
        return (
          <div className="CompleteTodo">
            <p>{number}</p>
            <p
              key={index}
              style={task.completed ? { textDecoration: "line-through" } : {}}
            >
              {task.todo}
            </p>

            <div className="buttons">
              <button
                className="delete-todo"
                onClick={() => {
                  deleteTodo(task);
                }}
              >
                <AiOutlineDelete />
              </button>

              <button className="Done" onClick={() => completeTodo(task.id)}>
                <MdDone />
              </button>

              <button  className='edit' onClick={() => setToggle(!toggle)}><LuEdit /></button>

              {toggle && (
                <div>
                  <input
                    type="text"
                    onChange={handleEditChange}
                    value={editInput}
                  />
                  <button onClick={() => handleUpdate()}>save</button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListTodo;

//       {todos?.length > 0 ? (
//         <ul>
//           {todos.map((entry, i) => (
//             <div className="todos">
//               <li key={i}>{entry}</li>
//
//             </div>
//           ))}
//         </ul>
//       ) : (
//         <div className="empty">
//           <p>No task found</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default ListTodo;
