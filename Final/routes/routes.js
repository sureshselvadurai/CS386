
const path = require('path');
const config = require('../modules/config');
const readCSV = require('../modules/csvReader');
const fs = require('fs');

function renderPage(res, template, additionalData = {}) {
  const data = {
    appName: config.appName,
    ...additionalData,
  };
  res.render(template, data);
}

module.exports = function (app) {
  app.get('/', (req, res) => {
    const postsData = readCSV('./private/data/posts.csv');
    const sortedPostsData = postsData.sort((a, b) => new Date(a.timeAgo) - new Date(b.timeAgo));
    renderPage(res, 'main', { posts: sortedPostsData });
  });

  app.get('/contact', (req, res) => {
    renderPage(res, 'contact');
  });

  app.get('/profile', (req, res) => {
    renderPage(res, 'profile');
  });

  app.get('/projects', (req, res) => {
    renderPage(res, 'projects');
  });

  app.get('/resume', (req, res) => {
    renderPage(res, 'resume');
  });

  app.get('/getpdf', (req, res) => {
    const pdfPath = './private/data/Resume SureshSelvadurai.pdf';
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfText = dataBuffer.toString('base64');
    res.json({ pdfText });
  });
};
