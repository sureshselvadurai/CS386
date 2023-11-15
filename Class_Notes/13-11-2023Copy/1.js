const express = require('express');
const app = express();

app.use(function(req,res,next){console.log("middleware")}
next()
)
app.get("/",function(req,res){
    res.send("<h1>Express Port</h1>")
})

app.listen(3001,"localhost",function(){
    console.log("Server started");
})