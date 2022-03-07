const express = require('express');

const app = express();

// We have 4 http methods.
// GET POST PUT DELETE
// GET retrieves data
// POST creates data
// PUT updates data
// DELETE deletes data

// We are going to write api "ROUTES"
// http:// ${address} : {port}
// http://localhost:3000/

// Forward slash is the "default" route

// res.send sends HTML
app.get('/', function(req, res) {
  res.send('Hello World');
})

app.get('/leo', (req, res) => {
  res.send('<div>Hello Leo</div>');
})

app.listen(3000);
