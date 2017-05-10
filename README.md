# Mailchimp Single Sign On

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

A simply heroku-ready Hapi.js app (& jQuery Plugin) for enabling Ajax Style Mailchimp Form Opt-ins.

### Heroku App

Grab a Mailchimp API Key, and deploy this to Heroku.

You'll want to set `MAILCHIMP_API_KEY` and grab your list ID.

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
