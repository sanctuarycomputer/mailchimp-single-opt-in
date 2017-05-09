'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: 'POST',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.start((err) => {
  if (err) throw err;
  console.log(`~~~> Server running at: ${server.info.uri}`);
});
