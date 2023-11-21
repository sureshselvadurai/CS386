const HOST = "localhost";
const PORT = 3000;
const express = require("express");
const HtmlForm = require("./modHtmlFormGET.js");
const app = express();

app.use("./", function(req, res) {
   console.log("home")
  res.send("<h1>Express Server</h1><he><p>Use GET and POST method</p>");
});

app.get("/form", function(req, res) {
    console.log("form")
  res.send(HtmlForm);
});

app.listen(PORT, HOST, function() {
  const currentDate = new Date();
  console.log(`Server started at http://${HOST}:${PORT} on ${currentDate}`);
});

