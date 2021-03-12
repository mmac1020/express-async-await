const express = require('express');

const path = require('path');

const morgan = require('morgan');

const app = express();

const expressStaticFiles = express.static(path.join(__dirname, 'public'));

app.use(expressStaticFiles);

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'oranges.html'));
});

app.use('/puppies', (req, res, next) => {
  console.log('We are in the puppies route');
  next();
});

// Typically used to retrieve data.
app.get('/puppies', (req, res, next) => {
  console.log(req.query);
  res.send('<h1>Welcome to the puppies page</h1>');
});

app.get('/puppies/:id', (req, res, next) => {
  console.log(req.params);
  res.send('<h1>Welcome to the puppies page</h1>');
});

// Typically used to create data in our database
// req.body is available here, which is typically some object
app.post('/puppies', (req, res, next) => {
  console.log(req.body);
  console.log(req.query);
  // console.log("we've hit the post route");
  res.sendStatus(200);
});

// Typically used to update data in our database
// req.body is available here, which is typically some object
app.put('/puppies', (req, res, next) => {
  console.log("we've hit the post route");
  res.sendStatus(200);
});

// Typically used to delete data in our database
app.delete('/puppies', (req, res, next) => {
  console.log("we've hit the post route");
  res.sendStatus(200);
});

app.get('/puppies/:puppyId', (req, res, next) => {
  res.send(`<img src="/puppy-${req.params.puppyId}.jpg"/>`);
});

const pizzaMiddleware = (req, res, next) => {
  console.log('I am on the pizza route');
  next();
};

app.get('/pizza', pizzaMiddleware, (req, res, next) => {
  res.send('<h1>Welcome to the pizza page</h1>');
});

// our 404 handler
app.use((req, res, next) => {
  res.sendStatus(404);
});

// our custom error handler
app.use((err, req, res, next) => {});

app.listen(1384, function () {
  console.log('Running on port 1384');
});
