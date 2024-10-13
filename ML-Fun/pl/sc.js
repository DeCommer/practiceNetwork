const http = require('http');

// Use TCP port 3000 for our server
const PORT = 3000;

// Create a server instance and provide a request handler callback function
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Shit');
});

// Start listening on port 3000
server.listen(PORT, () => {
  console.log(`Server running at PORT:${PORT}/`);
});