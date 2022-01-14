// Normally, we can use keywords such as eval, arguments as variable names
// but using strict mode, we cannot do that
"use strict"

let eval = 10;
console.log(eval)
// Output:
// SyntaxError: Unexpected eval or arguments in strict mode

let arguments = 20;
console.log(arguments)
// Output:
// SyntaxError: Unexpected eval or arguments in strict mode

// Keywords reserved for future JavaScript versions also cant be used as variable names in strict mode.
// Such as public, private, protected, static, interface, implements etc.