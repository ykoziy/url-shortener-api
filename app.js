const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT;
const db = require('./db');
const routes = require('./routes');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

routes.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
