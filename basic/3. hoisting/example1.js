console.log(x)
let x = 5

{/*
output:
Uncaught ReferenceError: x is not defined
*/}

console.log(x)
const x = 5

{/*
output:
Uncaught ReferenceError: x is not defined
*/}

console.log(x)
var x = 5

{/*
output:
undefined
*/}
