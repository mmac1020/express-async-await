const express = require('express');

const path = require('path');

const app = express();

// This line sets up a middleware function that when passed to app.use, sets up all our public files onto their own named routes.
const expressStaticFiles = express.static(path.join(__dirname, 'public'));

// DO NOT DO THIS!!!!!!
// const staticFiles = express.static(__dirname + `\public`)

console.log(path.join(__dirname, 'public'));

// __dirname
// C:\Users\Night\workspace\junior-phase\express-async-await\express\public

// app.get('/oranges.html'
// app.get('/puppy-1.jpg'
// app.get('/puppy-2.jpg'

app.use(expressStaticFiles);

app.get('/my-file', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'oranges.html'))
})

app.listen(1384, function () {
  console.log('Running on port 1384');
});
