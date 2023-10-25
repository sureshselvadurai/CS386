//function fSumDigits to calculate the sum of a series of digits
function fSumDigits(pNum){
  let sum = 0;
  for (let i = 0; i < pNum.length; i++) {
    sum += parseInt(pNum[i]);
  }
  return sum;
}

//function fRemoveSpaces to remove blank spaces from a string
function fRemoveSpaces(pString){
    let newString = "";
    for(let i=0; i<pString.length; i++){
        if(pString[i]!==" "){
            newString+=pString[i];
        }
    }
    return newString;
}

//function fVerifyCC to verify a credit card number
function fVerifyCC(pCC) {

    pCC = fRemoveSpaces(pCC);
    let sum = 0;

    for (let i = pCC.length - 1; i >= 0; i--) {
        let digit = parseInt(pCC[i]);
        if (((pCC.length-i)%2) !== 1) {
            digit *= 2;
            if (digit > 9) {
                digit = fSumDigits(String(digit));
            }
        }
    sum += digit;
    }

    if (sum % 10 === 0) {
        return `CC Number ${pCC} is Valid`;
    } else {
        return `CC Number ${pCC} is InValid`;
    }
}
console.log(`Output of fSumDigits("3634") is :  ${fSumDigits("3634")}`)
console.log(`Output of fRemoveSpaces("Test String Merge") is :  ${fRemoveSpaces("Test String Merge")}`)
console.log(`Output of fVerifyCC("4539 6779 0801 6808") is :  ${fVerifyCC("4539 6779 0801 6808")}`)
console.log(`Output of fVerifyCC("4532 7787 7109 1795") is :  ${fVerifyCC("4532 7787 7109 1795")}`)