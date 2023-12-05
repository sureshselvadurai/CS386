const express = require("express"); //Top-level function exported by the express module
const app = express(); //Instantiate express instance

//Middleware
app.use(function(req, res, next) { //Display request method and url, also secondary resources
	console.log('Request method= ' + req.method + " : " + req.url);
	next();
})
app.use(express.static(__dirname)); //Use static middleware

app.get("/react", function(req, res) {
	res.sendFile('Example28-1.html', {root: __dirname});
})

app.listen(3000,'127.0.0.1', function() {//Create server
	console.log(`Express server started on ${new Date().toLocaleString()} on server localhost:3000`);
});


