const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const html = require('./icp15_html');
const app = express();
const port = 3000;
const host = 'localhost';

//Express setup
app.use(session({
  secret: 's$cr$t',
  saveUninitialized: true,
  resave: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));

//Setup routes
app.get('/', (req, res) => {
  const sSession = req.session;
  if (sSession.user) {
    res.redirect(303, '/admin');
  } else {
    res.send(`${html.top}${html.login}${html.bottom}`);
  }
});

app.get('/admin', (req, res) => {
  const sSession = req.session;

  if (!sSession.user) {
    res.redirect(303, '/');
  } else {
    res.send(`${html.top}${html.admin}${html.bottom}`);
  }
});

app.post('/login', (req, res) => {
  const sSession = req.session;
  sSession.user = req.body.user;
  res.redirect('/admin');
});

app.get('/logout', (req, res) => {
  const sSession = req.session;
  sSession.destroy(() => {
    res.send(`${html.top}${html.loggedOut}${html.bottom}`);
  });
});

// Server
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});