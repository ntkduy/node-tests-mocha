const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo app v1.0'
  });
});


app.get('/user', (req, res) => {
  res.send({
    userList: ['Tang Nguyen', 'Bao Ngoc']
  });
});

app.listen(3000);

module.exports.app = app;
