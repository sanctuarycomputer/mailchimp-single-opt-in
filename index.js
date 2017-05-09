'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: (process.env.PORT || 3000), host: '0.0.0.0' });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Mailchimp Single Opt In is running on this URL. Send a POST request with { email: "hello@example.com" } to create subscribers.');
  }
});

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
