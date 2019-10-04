const routes = require('express').Router();
const api = require('./api');

routes.get('/', (req, res) => {
  res.sendFile('../views/index.html');
});

routes.use('/api', api);

module.exports = routes;