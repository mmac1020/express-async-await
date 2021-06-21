const express = require('express');

const path = require('path');

const app = express();

const expressStaticFiles = express.static(path.join(__dirname, 'public'));

app.use(expressStaticFiles);

app.listen(1384, function () {
  console.log('Running on port 1384');
});
