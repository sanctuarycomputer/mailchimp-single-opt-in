# Mailchimp Single Opt In

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

A simple heroku-ready Hapi.js app (& jQuery Plugin) for enabling Ajax Style Mailchimp Form Opt-ins without requiiing the subscriber's confirmation via email.

### Heroku App

Grab a Mailchimp API Key, and deploy this to Heroku via the Heroku Button.

You'll need your App's URL for the next step.

### jQuery Plugin

Include `mailchimp-single-opt-in.jquery.js`, and setup a form like so:

```html
<form id="mailchimp-form">
  <input type="email" />
</form>

```

And JS:

```js
$('#mailchimp-form').mailchimpSingleOptIn({
  listID: MAILCHIMP_LIST_ID,
  url: HEROKU_APP_URL,
  onSubmit() {},
  onError(request) {},
  onSuccess(request) {}
});
```
Your Mailchimp List ID can be found here: http://kb.mailchimp.com/lists/manage-contacts/find-your-list-id

![alt text](https://static.mailchimp.com/web/brand-assets/mc_freddie_color_web.png)
