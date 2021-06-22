const express = require('express');

const app = express();

// API ROUTES
// We call them "routes" because the request has to specifically ask for them
app.get('/', (request, respond, next) => {
  respond.send('<h1> Welcome to the homepage </h1>');
});

app.get('/puppies', (request, respond, next) => {
  respond.send('<h1> Welcome to the puppies route</h1>');
});

app.listen(8080);
