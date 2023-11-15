const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const HOST = 'localhost';
const PORT = 3000;
const DIR = path.join(__dirname, 'logs');
const FILE_LOG = path.join(DIR, 'log.txt');
const HTML = '<h1>In-Class Programming 13</h1>';

app.get('/', (req, res) => {
  res.send(HTML);
  // Log the request
  fLog('Request received ', req);
});

app.get('/error', (req, res) => {
  // Simulate an error
  throw new Error('Something went wrong');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
  // Log a 404 error
  fLog('Error 400 generated', req);
});

app.use((err, req, res, next) => {
  res.status(500).send('500 Internal Server Error');
  // Log a 500 error
  fLog('Error 500 generated', req);
});

const server = app.listen(PORT, HOST, () => {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
  }
  console.log(`Server running at http://${HOST}:${PORT}/`);
  // Log the start of the server
  fLog('Server started ', {});
});

function fLog(strMsg , req) {
  const timestamp = new Date().toISOString();
  let logMessage = `${strMsg} on ${timestamp}`;

  if (req && req.url === '/') {
    logMessage += `\n ----- User-Agent: ${req.get('User-Agent')} \n ----- Hostname: ${req.hostname}\n ----- IP Address : ${req.ip}\n ----- Protocol: ${req.protocol}`;
  }

  fs.appendFileSync(FILE_LOG, logMessage + '\n');
}

process.on('SIGINT', () => {
  fLog('SIGINT signal received', {});
  fLog('Closing http server', {});

  server.close(() => {
    fLog('Http server closed', {});
    process.exit(0);
  });
});
