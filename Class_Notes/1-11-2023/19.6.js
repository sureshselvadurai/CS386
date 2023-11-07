const http = require('http')
const host = "127.0.0.1"
const port = 3021
const server = http.createServer(function(req,res){
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Testing HTTP</h1>')
})
server.listen(port,host,function(){console.log(`Server Started`)})