const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  if(req.method === 'GET') {
    if(req.url === '/') {
      res.writeHead(200)
      res.write(`<h1>Welcome to the main page</h1>`)
      res.end()
    } else if (req.url === '/puppies') {
      res.writeHead(200)
      res.write(`<h1>Welcome to the puppies page</h1>`)
      res.end()
    }
  }
})

server.listen(3000, 'localhost', function() {
  console.log('Our server has started!');
})