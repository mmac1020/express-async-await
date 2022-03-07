const express = require('express');

const app = express();

// Handles ALL http verbs (GET, POST, PUT, DELETE).
// Plus, it defaults to all URLs

// app.use((req, res, next) => {})

// These are equivalent (lines 8 and 12)

// This works for GET, POST, PUT, and DELETE requests

const path = require('path');

// Give express.static the folder of your frontend javascript code, and it will serve that to the browser
// app.use(express.static('./public'));

app.use(express.static(path.join(__dirname, 'public')));


// app.get('/oranges.html', (req, res, next) => {
//   res.sendFile('./public/oranges.html');
// })

app.use('*', (req, res, next) => {
  console.log(req.method, req.url);
  // req.someData = 'my new data';
  next();
})

// This ONLY works for get requests.
// app.get('*');

// app.post / put / delete ('*')

// res.send sends HTML
app.get('/', function(req, res) {
  res.send('Hello World');
})

// How to denote a parameter is to put a colon in front of it

app.get('/users/:id/:name', (req, res) => {
  res.send(`<div>Hello user ${req.params.id} </div>`)
});

app.get('/:name', (req, res) => {
  console.log(req.params);
  res.send(`<div>Hello ${req.params.name}</div>`);
})

app.listen(3000, function () {
  console.log('Running on port 3000');
});
