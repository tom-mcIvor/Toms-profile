const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}
function deleteTask(id, db =connection){
  return db('todos').where('id', id).del()
}

function addTask(task, db = connection){

  return db('todos').insert({task: task})
}


// finding tasks id as input
// return the todos where id matches
// update({what you want to update with. key:value})

function updateTask(id, task, db=connection){

  
  return db('todos').where('id', id).update({task: task})

}

module.exports = {
  getTodos,
  close,
  deleteTask,
  addTask,
  updateTask
}