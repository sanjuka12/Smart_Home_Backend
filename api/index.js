/*const { createServer } = require('node:http');
const serverless = require('serverless-http');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/

//vercel hosting

// api/index.js
const app = require('../app');
const serverless = require('serverless-http');

module.exports = serverless(app);

