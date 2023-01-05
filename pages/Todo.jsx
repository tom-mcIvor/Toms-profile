import { useState } from 'react'

function Todo() {
  // Initialize an empty list of todos
  const [todos, setTodos] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    // Get the value of the "todo" input field
    const todo = event.target.elements.todo.value

    // Add the new todo to the list
    setTodos([...todos, todo])

    // Clear the input field
    event.target.elements.todo.value = ''
  }

  function handleDelete(index) {
    // Remove the todo at the specified index from the list
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input type="text" name="todo" />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo