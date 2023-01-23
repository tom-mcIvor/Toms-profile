const db = require('./db')

function list() {
  return db
    .getTodos()
    .then((todos) => {
      printTodos(todos)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

//Delete
function deleteTodo(id){
  return db.deleteTask(id).then(()=>{
    console.log('Task deleted')  
  }).catch((err)=>{
    logError(err)
  }).finally(()=>{
    db.close()
  })
}

 //Add
function addToDo(task){
  return db.addTask(task).then(()=>{
    console.log('Task added')  
  }).catch((err)=>{
    logError(err)
  }).finally(()=>{
    db.close()
  })
}

 //update
function updateToDo(id, task){
  return db.updateTask(id, task).then(()=>{
    console.log('Task added')  
  }).catch((err)=>{
    logError(err)
  }).finally(()=>{
    db.close()
  })
}

module.exports = {
  list,
  deleteTodo,
  addToDo,
  updateToDo
}
