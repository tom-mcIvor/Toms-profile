const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function getTodos(db = connection) {
  return db('todos').select()
}

function close(db = connection) {
  db.destroy()
}

function deleteTask(id, db =connection){
  return db('todos').where('id', id).del()
}

function addTask(task, db = connection){
  return db('todos').insert({task: task})
}

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