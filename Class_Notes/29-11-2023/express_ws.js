const express = require("express"); //Top-level function exported by the express module
const app = express(); //Instantiate express instance
const host = '127.0.0.1', port = '3000';
//Middleware
app.use(function(req, res, next) { //Display request method and url, also secondary resources
	console.log('Request method= ' + req.method + " : " + req.url);
	next();
})
const files = __dirname + '/files'; //Define static files folder
app.use(express.static(files)); //Use static middleware

app.get("/", function(req, res) {
	res.sendFile('Example27-7.html', {root: files}); //Send main example file
})

app.listen(port, host, function() {//Create server
	console.log(`Express server started on ${new Date().toLocaleString()}
	on ${host}:${port}`);
});


