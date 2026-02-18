// import React from 'react'
// import TodoItem from './TodoItem'

// const ToDoContainer = ({ todos }) => {
//   return (
//     <>
//       <ul className="todo_container">
//         {todos.map((todo) => (
//           <TodoItem key={todo.id} name={todo.name} />
//         ))}
//       </ul>
//     </>
//   )
// }

// export default ToDoContainer

// Delete

import TodoItem from './TodoItem'

const ToDoContainer = ({ todos, onDelete, statusChanger }) => {
  return (
    <div className="todo_container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          status={todo.status}
          onDelete={onDelete}
          statusChangerFn={(status) => statusChanger(todo.id, status)}
        />
      ))}
    </div>
  )
}

export default ToDoContainer
