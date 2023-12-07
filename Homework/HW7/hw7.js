const HOST = 'localhost';
const PORT = 3000;

//load module
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const connectDB = require('./modules/db');

connectDB(true);

//load hb
const app = express();
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
    defaultLayout: 'basic_layout',
    layoutsDir: __dirname + '/views/layouts'
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

//load and define model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  DateTime: String,
});
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.render('get_request');
});

//routing
app.post('/addname', (req, res) => {
  const FormData = new User(req.body);
  FormData.DateTime = new Date().toLocaleString();

  FormData.save().then(() => {
    const context = {
      first: FormData.firstName,
      last: FormData.lastName,
      datetime: FormData.DateTime,
    };
    res.render('post_request', context);
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});