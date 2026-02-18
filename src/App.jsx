// Delete

import { useRef, useState } from 'react'
import ToDoContainer from './ToDos/ToDo'

function App() {
  const todoNameRef = useRef()
  const [todos, setTodos] = useState([])

  function submitHandler(e) {
    e.preventDefault()
    setTodos([
      { id: Date.now(), name: todoNameRef.current.value, status: 'DOING' },
      ...todos,
    ])
    todoNameRef.current.value = ''
  }

  console.log(todos)

  //  DELETE FUNCTION
  function deleteHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id))

    if (todos.status === 'DOING') return
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // -------------------------------------------------------------
  // Status Update Function
  function statusChanger(id, status) {
    const cloneTodos = todos.map((e) => e)
    const todo = cloneTodos.find((todo) => todo.id === id)

    if (!todo) return
    if (status) {
      todo.status = 'DONE'
      setTodos(cloneTodos)
    } else {
      todo.status = 'DOING'
      setTodos(cloneTodos)
    }
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Todo Name" ref={todoNameRef} />
        <button>Create ToDo</button>
      </form>

      <ToDoContainer
        todos={todos}
        onDelete={deleteHandler}
        statusChanger={statusChanger}
      />
      {/* <button onClick={() => statusChange(todos[1].id, true)}>
        StatusChange
      </button> */}
    </div>
  )
}

export default App
