const http = require("http")
const port = "3000"
const host = "localhost"
const server = http.createServer(function(req,res){
    if(req.method =="GET"){
        const reqHeader = req.headers
        let strHeaders = ""
        for(let prop in reqHeader){
            strHeaders += "<li>"+prop+" = "+reqHeader[prop]+"</li>"
        }
        res.end(`<h1> Request Headers</h1> <ol> ${strHeaders} </ol>`)
    }
})

server.listen(port,host,function(){
    console.log(`Server at ${host}:${port}`)
})
