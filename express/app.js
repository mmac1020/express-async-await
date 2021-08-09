const express = require('express');

const path = require('path');

const app = express();

// __dirname is current directory of app running
// path.join combines that directory with whatever other arguments
// mydirectory/public
// express static takes a string representing the path to the directory of static files
const expressStaticFiles = express.static(path.join(__dirname, 'public'));

// This now sets up all of our get /fileName routes
// get /oranges.html
// get /puppy-1.jpg
// get /puppy-2.jpg
app.use(expressStaticFiles);

app.listen(1384, function () {
  console.log('Running on port 1384');
});
