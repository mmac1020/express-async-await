const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the homepage!</h1>')
})

app.get('/puppies', (req, res, next) => {
  res.send('<h1>Welcome to the puppies page!</h1>')
})

app.listen(3000, function() {
  console.log('app is listening on 3000');
}) 