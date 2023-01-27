import request from 'superagent'

const getTodos = (req, res) => {
  // return request.get('/v1/posts')
  //     .then((res) => res.body)
  //     .catch((error) => console.error(error));

  res.json({
    'task 1': 'mow lawn',
    'task 2': 'wash car',
  })
}

// const addTodo = (todo) => {
//     return request.post('/v1/posts')
//         .send(todo)
//         .then((res) => res.body)
//         .catch((error) => console.error(error));
// };

// const updateTodo = (id, todo) => {
//     return request.put(`/api/todos/${id}`)
//         .send(todo)
//         .then((res) => res.body)
//         .catch((error) => console.error(error));
// };

// const deleteTodo = (id) => {
//     return request.delete(`/api/todos/${id}`)
//         .then((res) => res.body)
//         .catch((error) => console.error(error));
// };

export default getTodos
