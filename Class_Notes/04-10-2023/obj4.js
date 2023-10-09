
console.log(`---------------------------------`)

let object = {"a":1, "b": false, "c": null, "d": "", "f": undefined, "z": new Date()}
console.log(fObjLoop(object))
let serial = JSON.stringify(object)
console.log(`${serial}`)
let restore = JSON.parse(serial)
console.log(fObjLoop(restore))

function fObjLoop(obj){
    let strObject = ``
    for(let prop in obj){
        strObject += prop + " : " + object[prop] + "\n"
    }
    return strObject
}



