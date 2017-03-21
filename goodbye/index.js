'use strict';

// Load modules

const Http = require('http');


const server = module.exports = Http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Goodbye');
});

server.listen(3001, () => {
  console.log(`goodbye server listening on port ${server.address().port}`);
});
