const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  // Delay response by 10 seconds to simulate slow response
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Delayed response for testing\n');
  }, 10000);
});

server.listen(port, () => {
  console.log(`Delayed response test server running at http://localhost:${port}/`);
});
