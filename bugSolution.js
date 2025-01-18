const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port);
  console.log(`Server is running on port ${port}`);
}

const stopServer = () => {
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
};

process.on('SIGINT', stopServer);

startServer();