const express = require('express');

const path = require('path');

const morgan = require('morgan');

const app = express();

const expressStaticFiles = express.static(path.join(__dirname, 'public'))

app.use(expressStaticFiles);

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'oranges.html'));
})

app.use('/puppies', (req, res, next) => {
  console.log('We are in the puppies route');
  next();
})

app.get('/puppies', (req, res, next) => {
  res.send('<h1>Welcome to the puppies page</h1>')
})

app.get('/puppies/:puppyId', (req, res, next) => {
  res.send(`<img src="/puppy-${req.params.puppyId}.jpg"/>`)
})

const pizzaMiddleware = (req, res, next) => {
  console.log('I am on the pizza route');
  next();
}

app.get('/pizza', pizzaMiddleware, (req, res, next) => {
  res.send('<h1>Welcome to the pizza page</h1>')
})

app.listen(1384, function() {
  console.log('Running on port 1384');
});