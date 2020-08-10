const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  res.writeHead(200)
  res.write(`<h1>Welcome to the main page</h1>`)
  res.end()
})

server.listen(3000, 'localhost', function() {
  console.log('Our server has started!');
})