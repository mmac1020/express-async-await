const express = require('express');

const app = express();

// This will match ALL routes
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})

app.use('/puppies', (req, res, next)=>{
  console.log(`we've hit the puppies route`);
  next();
})

app.get('/', (request, response, next) => {
  response.send('<h1>Hello from the home page</h1>')
})

app.get('/puppies', (request, response, next) => {
  response.send('<h1>Hello from the puppies route</h1>')
})

app.get('/puppies/:id/hello-page/:otherParam', (request, response, next) => {
  response.send(`<h1> Hello Puppy #${request.params.id} and ${request.params.otherParam}</h1>`)
})

// If we're ever accessing a database, we will put all our routes on /api/theThingWe'reAccessing

app.get('/api/puppies', (request, response, next) => {
  // I would do some database work with the puppies
  response.send(puppies);
})

app.listen(8080);
