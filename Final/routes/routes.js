
const path = require('path');

const config = require('../modules/config');

module.exports = function (app) {

  app.get('/', (req, res) => {
    res.render('main');
  });

  app.get('/contact', (req, res) => {
    res.render('contact');
  });

  app.get('/profile', (req, res) => {
    res.render('profile');
  });

  app.get('/projects', (req, res) => {
    res.render('projects');
  });

  app.get('/resume', (req, res) => {
    res.render('resume');
  });
}