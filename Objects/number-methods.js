let num = 103.9412

console.log(num.toFixed(2))

console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

let min = 0 
let max = 20
let randomNum = Math.floor(Math.random() * (max-min +1)) + min
console.log(randomNum)


let makeGuess = function (guess) {
    let min1 = 1
    let max1 = 5 
    let randomNum = Math.floor(Math.random() * (max1-min1 +1)) + min1
    
    return guess === randomNum
}
console.log(makeGuess(3))