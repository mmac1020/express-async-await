const express = require('express');

const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));

// API ROUTES
// We call them "routes" because the request has to specifically ask for them
app.get('/', (request, respond, next) => {
  respond.send('<h1> Welcome to the homepage </h1>');
});

app.get('/puppies', (request, respond, next) => {
  respond.send('<h1> Welcome to the puppies route</h1>');
});

// The colon says that whatever comes after /users/ should be placed on req.params.id
app.get('/users/:something', (req, res, next) => {
  res.send(`<h1> Hello user ${req.params.something} </h1>`)
})

// The colon says that whatever comes after /users/ should be placed on req.params.id
app.get('/users/:something/edit/:otherWork', (req, res, next) => {
  res.send(`<h1> Hello user ${req.params.something}. This is your edit page for ${req.params.otherWork}</h1>`)
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log('started on port 8080');
});
