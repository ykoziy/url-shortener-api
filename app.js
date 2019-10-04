const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const db = require('./db');
const routes = require('./routes');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
