const express = require('express');

const app = express();

// First parameter is request object
// Second parameter is response object
// Third we'll get to later
app.get('/', (request, response, next) => {
  // console.log(response);
  response.send('<h1>Hello, welcome to the homepage</h1>');
  // response.sendFile()
  // response.json()
});

app.get('/puppies', (req, res, next) => {
  res.send('<h1>Welcome to the puppies route</h1>');
});

app.listen(3000);
