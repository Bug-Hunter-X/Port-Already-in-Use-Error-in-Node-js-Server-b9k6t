const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const port = 8080;

const server = http.createServer(requestListener);

function startServer() {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Retrying...`);
      setTimeout(startServer, 1000); // Retry after 1 second
    } else {
      console.error(`Server failed to start: ${err}`);
    }
  });
}

startServer();