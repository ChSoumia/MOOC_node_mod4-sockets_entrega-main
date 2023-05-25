const net = require('net');
const rls = require('./socketComm.js');

const port = 8080;

let server = net.createServer(socket => {
  rls.initSocketComm(socket);
});

server.listen(port);
console.log('Listening port 8080');
