function fCount(){
    let counter = 0
    counter ++
    console.log(`Counter : ${counter}`)
}

function main(){
    let count = 0
    for(let i=0;i<3;i++){
        console.log(`Iteration : ${i}`)
        console.log(`---------------------`)
        count++
        console.log(`count : ${count}`)
    }
    fCount()
}

main()