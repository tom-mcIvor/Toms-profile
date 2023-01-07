import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import DarkModeToggle from './components/DarkMode';
import Layout from '../components/Layout';


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
      <Layout>
    <div className='to-do-div'>
        <h1>Todo</h1>
        <div>
          <form onSubmit={handleSubmit}>
        
        
        
              <TextField type="text" name="todo" id="outlined-basic" label="Todo" variant="outlined" />
        
        
            <Button type="submit" variant="contained" color="primary">Add</Button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <Button type="button" variant="contained" color="primary" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
        
    </div>
      </Layout>


  )
}

export default Todo