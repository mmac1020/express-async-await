const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the main page</h1>')
})

app.get('/puppies', (req, res, next) => {
  res.send('<h1>Welcome to the puppies page</h1>')
})

app.listen(1384, function() {
  console.log('Running on port 1384');
});