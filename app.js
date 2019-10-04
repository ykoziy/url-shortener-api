const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const db = require('./db');
const routes = require('./routes');

app.use(express.static(__dirname + '/public'));

routes.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
