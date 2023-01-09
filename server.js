
const express = require('express');
const next = require('next');
const tennisRoutes = require('./tennis');
const path = require('path');



const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const server = express();

app.prepare().then(() => {
  server.use(handler);
  server.use(express.json());
  server.use(express.static(path.join(__dirname, 'public')));
  server.use('/api/v1/tennis', tennisRoutes);
  module.exports = server;
});

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})