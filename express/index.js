const express = require('express');

const path = require('path');

const morgan = require('morgan');

const app = express();

const expressStaticMiddleware = express.static(path.join(__dirname, 'public'))

app.use(expressStaticMiddleware);

app.use(morgan('dev'));

app.use('/puppies', (req, res, next) => {
  console.log('I am only on the puppies routes!');
  next();
})

const inject = (req, res, next) => {
  console.log('I have been injected into the pizza route');
  next();
}

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, public, 'index.html'));
  // res.send('<h1>Welcome to the homepage!</h1>')
})

app.get('/puppies', (req, res, next) => {
  res.send('<h1>Welcome to the puppies page!</h1>')
})

app.get('/puppies/:puppyId', (req, res, next) => {
  // req.params.puppyId;
  res.send(`<img src="/puppy-${req.params.puppyId}.jpg"/>`)
})

app.get('/pizza', inject, (req, res, next) =>{
  res.send('<h1>Welcome to the pizza page!</h1>')
})

app.listen(3000, function() {
  console.log('app is listening on 3000');
}) 