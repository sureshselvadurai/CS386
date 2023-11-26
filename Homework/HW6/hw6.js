const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Constants
const host = 'localhost';
const port = 3000;

// Load data files
const dataJSON = require('./dataJSON.js');
const dataCSV = require('./dataCSV.js');

const html_top = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HW6</title>
</head>
<body>`;

const html_bottom = `</body>
</html>`;

const strHTML = `<h1>Homework 6</h1>
<hr>
<div>
  <p>To view or download JSON data.</p>
  <a href="/view-json" target="_blank">View JSON</a>
  <a href="/json" target="_blank">Download JSON</a>
  <p>To view or download CSV data.</p>
  <a href="/view-csv" target="_blank">View CSV</a>
  <a href="/csv" target="_blank">Download CSV</a>
</div>`;

// Routing for "/"
app.get('/', (req, res) => {
  const completeHTML = `${html_top}${strHTML}${html_bottom}`;
  res.send(completeHTML);
});

// Route: /view-csv
app.get('/view-csv', (req, res) => {
  const csvInHTML = dataCSV.replace(/\n/g, '<br>');
  res.type('text/html').status(200).send(csvInHTML);
});

// Route: /json
app.get('/json', (req, res) => {
  res.header('Content-Disposition', 'attachment; filename=dataJSON.json');
  res.type('application/json').status(200).send(dataJSON);
});

// Route: /csv
app.get('/csv', (req, res) => {
  res.header('Content-Disposition', 'attachment; filename=dataCSV.csv');
  res.type('application/csv').status(200).send(dataCSV);
});

// Route: /view-json
app.get('/view-json', (req, res) => {
  res.status(200).json(dataJSON);
});

// 404 Error Middleware
app.use((req, res, next) => {
  res.status(404).send('Method not found');
});

// 500 Error Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Create server
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
