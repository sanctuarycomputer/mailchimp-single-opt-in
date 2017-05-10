'use strict';

const Hapi      = require('hapi');
const Mailchimp = require('mailchimp-api-v3');
const server    = new Hapi.Server();
server.connection({ port: (process.env.PORT || 3000), host: '0.0.0.0' });
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    if (!process.env.MAILCHIMP_API_KEY) {
      reply('Mailchimp Single Opt In is missing the Mailchimp API KEY. Please ensure MAILCHIMP_API_KEY is defined - you can get one here: https://admin.mailchimp.com/account/api/.');
    } else {
      reply('Mailchimp Single Opt In is running on this URL. Send a POST request with { email: "hello@example.com", list_id: "123abc" } to create subscribers.');
    }
  }
});

server.route({
  method: 'POST',
  path: '/',
  handler: function (request, reply) {
    if (!request.payload.email) return reply({ status: "no_email" }).code(400);
    if (!request.payload.list_id) return reply({ status: "no_list_id" }).code(400);
    mailchimp.post(`/lists/${request.payload.list_id}/members`, {
      email_address: request.payload.email,
      status: 'subscribed'
    }, function(err, results) {
      if (err) {
        const { type, title, detail, status } = err;
        return reply({ type, title, detail, status }).code(status);
      };
      return reply({ status: "ok" }).code(200);
    });
  }
});

server.start((err) => {
  if (err) throw err;
  console.log(`~~~> Server running at: ${server.info.uri}`);
});
