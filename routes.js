const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('./models/db')

const router = express.Router()

// put routes here

router.get('/', (req, res) => {
  // db.getTodos()
    // .then((posts) => {
    //   res.json(posts)
    // })
    // .catch(console.error)

    res.json(
      {
        "task 1" : "mow lawn",
        "task 2" : "wash car"
      }
    )
})

module.exports = router
