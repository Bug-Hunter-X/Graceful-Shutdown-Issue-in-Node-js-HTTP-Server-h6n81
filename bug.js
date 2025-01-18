const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The issue is that the server does not stop gracefully when you press Ctrl+C. This is because the server.listen() method starts an asynchronous operation that does not have a callback. To fix this, you need to add an event listener for the 'SIGINT' event, which is emitted when you press Ctrl+C.