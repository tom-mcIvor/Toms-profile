import request from 'superagent';

const getTodos = () => {
    return request.get('/v1/posts')
        .then((res) => res.body)
        .catch((error) => console.error(error));
};

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

export { getTodos /*, addTodo , updateTodo, deleteTodo */ };