const express = require('express');

const app = express();
const morgan = require('morgan');
// First parameter is request object
// Second parameter is response object
// Third we'll get to later

app.use(morgan('dev'));
// express.json is needed for express to decode a put / post JSON body
app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.method, req.url);

//   // These will all respond to the client and the request will be responded to. Express stops looking for the route
//   // res.send
//   // res.sendFile
//   // res.json

//   // I don't have a response to send, so continue looking express
//   next();
// });

app.get('/', (request, response, next) => {
  // console.log(response);
  response.send('<h1>Hello, welcome to the homepage</h1>');
  // response.sendFile()
  // response.json()
});

app.get('/puppies', (req, res, next) => {
  res.send('<h1>Welcome to the puppies route</h1>');
});

app.get('/puppies/:puppyName', (req, res, next) => {
  console.log(req.params);
  res.send(`<h1> Hello puppy name: ${req.params.puppyName}</h1>`);
});

app.put('/puppies/:id', (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  res.send('WE did it');
});

app.listen(3000, () => {
  console.log('The server is live!');
});
