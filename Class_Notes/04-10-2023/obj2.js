let object = {title:"McBeth",author:"Shakespeare"}
//console.log(`${object.title}`)
object.title = "Macbeth"
object.edition = 6
for(let prop in object){
    console.log(`Property: ${prop} Value : ${object[prop]}`)
}

delete object.edition
for(let prop in object){
    console.log(`Property: ${prop} Value : ${object[prop]}`)
}