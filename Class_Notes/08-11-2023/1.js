const url = require("url")
sampleURL = "http://user:pass@host.com:8080/p/a/t/h?par1=val1&par2=val2#hash"
objURL = url.parse(sampleURL)
for(prop in objURL){
    if(typeof(objURL[prop])!=="function"){
        console.log(`${prop} : ${objURL[prop]}`)
    }
}