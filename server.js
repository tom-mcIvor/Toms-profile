const path = require('path')
const express = require('express')


const tennisRoutes = require('./tennis')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


server.use('/api/v1/tennis', tennisRoutes)


module.exports = server