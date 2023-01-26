const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('./models/db')

const router = express.Router()

// put routes here

router.get('/', (req, res) => {
  db.getTodos()
    .then((posts) => {
      res.json(posts)
    })
    .catch(console.error)
})

module.exports = router
