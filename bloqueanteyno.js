let myTime = date.now
const endTime = myTime + 3000
function printTwo () {
    console.log(2)
}

console.log(1)
while (myTime < endTime) {
    myTime = Date.now()
    }
printTwo()
console.log(3)




let myTime = date.now
const endTime = myTime + 3000
function printTwo () {
    console.log(2)
}

console.log(1)
while (myTime < endTime) {
    myTime = Date.now()
    }
setTimeout(printTwo, 0)
console.log(3)

