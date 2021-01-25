const express = require('express');

const path = require('path');

const app = express();

// This allows us to READ request bodies (post / put / delete)

app.use(express.json());

// I want to serve my static files (javascript / images / stylesheets)

app.use(express.static(path.join(__dirname, '/public')));

app.use('/other-file', require('./other-router'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'oranges.html'));
});

app.get('/puppies', (req, res, next) => {
  res.send("<h1>We're in the puppies route!</h1>");
});

app.post('/puppies', (req, res, next) => {
  console.log(req.body);
  res.send('gotcha');
});

app.post('/owners');

// These all work
// app.put('/puppies');
// app.delete('/puppies');

app.get('/puppies/:puppyId/:puppyName', (req, res, next) => {
  // req.params.puppyId
  // req.params.puppyName
  if (isNaN(req.params.puppyId)) {
    next(new Error('I was not supplied a number'));
  } else {
    res.send(`<img src="/puppy-${req.params.puppyId}.jpg"/>`);
  }
});

app.get('/owner', async (req, res, next) => {
  try {
    const owners = await Owner.findAll();
  } catch (err) {
    // Error()
    // Option 1
    // res.status(500).send('Could not find owners');
    // Option 2
    next(err);
  }
});

// (404 basically) Route not mapped catcher
app.use((req, res, next) => {
  res.status(404).send('we have a 404');
});

// Express custom error handling function
app.use((err, req, res, next) => {
  console.log('catch all errors');
  res.status(500).send(err.message);
});

app.listen(4000, (err) => {
  console.log("we're running");
});
