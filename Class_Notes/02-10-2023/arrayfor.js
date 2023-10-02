let carBrands = ["Ford", "Honda", "BMW"]
console.log("---for loop----")
for(let i=0;i<carBrands.length;i++){
    console.log(`Element ${i} : ${carBrands[i]}`)
}

for(let index in carBrands){
    console.log(`Index  : ${index}`)
}


for(let element of carBrands){
    console.log(`Element : ${element}`)
}