// app.js
const express = require('express');
const hbs = require('express-handlebars');
const config = require('./modules/config');
const routes = require('./routes/routes');
const app = express();
const path = require('path');

// Setting up handlebars
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
  })
);

//Setup static
app.use(express.static('public'));

// Use routes by passing the 'app' instance
routes(app);

// Start the server
app.listen(config.port, config.host, () => {
  console.log(`Server is running at http://${config.host}:${config.port}/`);
});