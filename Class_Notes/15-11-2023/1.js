const HOST = "localhost",PORT="3000"
const express = require("express")
const app = express()

app.use("/",function(req,res){
    res.send("<h1>Express Server</h1><he><p>Use GET and POST method</p>")
})

app.listen(PORT,HOST,function(){
    console.log(`Server started at ${HOST}:${PORT}`)
})