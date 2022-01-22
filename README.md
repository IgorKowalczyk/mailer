> This repository is outdated. Do not use it on production!

# Mailer
It is a simple Node.js server which forwards all "POST" submission by email. No database, 100% server (Nodejs), just sends the submissions by email.

[![Jekyll](https://github.com/IgorKowalczyk/mailer/workflows/Jekyll/badge.svg)](https://igorkowalczyk.github.io/mailer)
[![Node.js Workflow](https://github.com/igorkowalczyk/mailer/workflows/Node.js/badge.svg)](https://igorkowalczyk.github.io/mailer)
[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/mailer?color=%2334D058&logo=github&logoColor=959DA5&labelColor=24292E)](https://igorkowalczyk.github.io/mailer)
[![Version](https://img.shields.io/github/package-json/v/igorkowalczyk/mailer?color=%2334D058&logo=github&logoColor=959DA5&labelColor=24292E)](https://github.com/igorkowalczyk/mailer/releases)
[![Discord](https://img.shields.io/discord/666599184844980224?color=%2334D058&logo=discord&logoColor=7289da&labelColor=24292E)](https://igorkowalczyk.github.io/r/discord-server)

## How to use?
You create your front-end and style. Let's build anything you want, we'll take the backend!

#### Example form
```html
<form action="https://YOUR-DEPLOYED-APP/post" method="post" enctype="multipart/form-data">
  <label for="Email">Email
  <input id="Email" type="email" name="Email" required="true">
  </label>
  <label for="Name">Name
  <input id="Name" type="text" name="Name" required="true">
  </label>
  <input type="submit" value="Send">
</form>
```
> Note: Whether you add a `/post` or another endpoint, the app will always handle your request

## Deploy
Deploy the app to [Heroku](https://heroku.com)

[![Deploy to heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/igorkowalczyk/mailer/tree/master)

## Config
Here are all the environment variables you can use

| `.env` | Description | Required |
|---|---|---|
| MESSAGE | Message to displayed after the form submission. May contain HTML. Default: 'Thank you for your submission.' | :heavy_check_mark: |
| TO | Email address to send the form to (your email) | :heavy_check_mark: |
| FROM | Email address to use as sender address | :heavy_check_mark: |
| SITE_NAME | Name of your site, will be displayed in the email title | :x: |
| PORT | Port to listen to for form submissions | :x: |
| FORM | Path to the HTML file containing the example form, defaults to `/form.html` | :x: |
| EMAIL_HOST | SMTP config: [see these options here](https://nodemailer.com/smtp/) | :heavy_check_mark: |
| EMAIL_PORT | SMTP config: [see these options here](https://nodemailer.com/smtp/) | :heavy_check_mark: |
| EMAIL_USER | SMTP config: [see these options here](https://nodemailer.com/smtp/) | :heavy_check_mark: |
| EMAIL_PASS | SMTP config: [see these options here](https://nodemailer.com/smtp/) | :heavy_check_mark: |


# Development

### Node.js Version
- First you must fill `.env` config with your values
```
$ npm install
$ EMAIL_USER="john@doe.com" \
  EMAIL_PASS="abcd" \
  EMAIL_HOST="mail.host.net" \
  EMAIL_PORT=587 \
  TO="jahne@doe.com" \
  npm start
```
- Open `http://localhost:8080` to see the HTML form which resides in `form.html`. Submit the form and it will send you an email with the content of the form.
- You can customize the form, it will keep sending you all the field of the form by email.

### Jekyll Version (Docs)
To set up your environment to develop this page, run `bundle install`.

To test site, run `bundle exec jekyll serve` and open your browser at http://localhost:4000. This starts a Jekyll server using your config and the contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

# Issues
If you have any issues with the page please create [new issue here](https://github.com/igorkowalczyk/mailer/issues)

# Pull Requests
When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/mailer/pulls) on [GitHub](https://github.com) and describe the feature or fix.

# License
This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/mailer/blob/master/license.md) file for details
