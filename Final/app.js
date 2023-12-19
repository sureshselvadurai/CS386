// app.js
const express = require('express');
const hbs = require('express-handlebars');
const config = require('./modules/config');
const routes = require('./routes/routes');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./modules/db');
const fs = require('fs');

// Setting up handlebars
app.set('view engine', 'hbs');
app.engine(
  'hbs',
    hbs({
        extname: 'hbs',
        defaultLayout: 'mainLayout',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
      })
);

//QueryDBSetup
connectDB(true);
app.use(bodyParser.urlencoded({ extended: true }));

//load and define model
const querySchema = new mongoose.Schema({
  message: String,
  DateTime: String
});
const Query = mongoose.model('Query', querySchema);

//Setup static
app.use(express.static('public'));

// Use routes by passing the 'app' instance
routes(app);

//routing
app.post('/addQuery', (req, res) => {
  const FormData = new Query(req.body);
  FormData.DateTime = new Date().toLocaleString();
  console.log(req.body);
  console.log(FormData);
  FormData.save().then(() => {
    console.log('Data saved successfully.');
    });
});

// Start the server
app.listen(config.port, config.host, () => {
  console.log(`Server is running at http://${config.host}:${config.port}/`);
});