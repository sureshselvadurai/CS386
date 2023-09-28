try{
input = +prompt("Value");
}
catch{
input = +process.argv[2];
}

console.log(input);
const INITIAL = 25;
console.log(input==true)
let out = input || INITIAL;
console.log(out)