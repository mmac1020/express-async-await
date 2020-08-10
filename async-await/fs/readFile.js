const fs = require('fs');

console.log('Getting configuration');
fs.readFile('./config.json', 'utf8', (err, data) => {
  console.log('Got configuration: ', data);
})
console.log('Moving on...');