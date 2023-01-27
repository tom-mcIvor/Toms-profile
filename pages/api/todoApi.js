// const db = require('../../models/db')

const getTodos = (req, res) => {
  // return request.get('/v1/posts')
  //     .then((res) => res.body)
  //     .catch((error) => console.error(error));
  // db.getTodos()
  //   .then((posts) => {
  //     res.json(posts)
  //   })
  //   .catch(console.error)

  res.json([
    {'task': 'mow lawn'},
    {'task': 'wash car'},
  ])
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
