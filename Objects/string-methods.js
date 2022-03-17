let name = '   Anjali Yadav'
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.trim())


// function is used for multiple variables
let isValidPassword = function (password) {
     return password.length > 8 && password.includes('password') 
      }

console.log(isValidPassword('asdf12'))
console.log(isValidPassword('asdf123456'))
console.log(isValidPassword('asdf12password'))


// for single variable
let password = 'asdf1234'
console.log(!password.includes('password')) // ! -- not sign reverse the boolean result from false to true

