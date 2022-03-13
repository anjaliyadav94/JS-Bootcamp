let tipAmount = function (total, tipPercent = .20) {
    
    //instead of return total * tipPercent, we can use below three lines of code
    let percent = tipPercent * 100
    let result = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${result}` //this is an example of template string
    // another way: return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`


    // or we can add text here: return 'Amount: ' + (total*tipPeecent)
}

let tip = tipAmount (70)
//console.log('Amount: ' + tip)
console.log(tip)