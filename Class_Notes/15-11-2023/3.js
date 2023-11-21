const HOST = "localhost";
const PORT = 3000;
const express = require("express");
const app = express();
const hbs = require("express-handlebars")
app.set("view-engine","hbs")
app.engine("hbs",hbs.engine({
    layoutsDir: __dirname + "views/layouts",
    defaultLayout: "main_layout",
    extname:"hbs"
}))

app.use("./", function(req, res) {
   console.log("home")
  res.send("<h1>Express Server</h1><he><p>Use GET and POST method</p>");
});



app.get("/hb",function(req,res){
       res.render("basic_view")
})

app.listen(PORT, HOST, function() {
  const currentDate = new Date();
  console.log(`Server started at http://${HOST}:${PORT} on ${currentDate}`);
});

