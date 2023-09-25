try{
    num = +prompt("Enter number to check");
}catch{
    num = process.argv[2];
}
console.log(num)
rem = num%2;
console.log(rem)

if(rem==0){
    out = "even"
}else{
    out="odd"
}


try{
alert(out)
}catch{
console.log(out)
}
