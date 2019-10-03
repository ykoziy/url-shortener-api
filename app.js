const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const db = require('./db');

app.use(express.static(__dirname + '/public'));

//app.use('/', routes);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
