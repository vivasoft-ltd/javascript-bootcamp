// In this example we will see some usage of "strict mode". 
// As we already know, "use strict" defines that JavaScript code 
// should be executed in "strict mode", which is safer feature set of javascript.

// if we declare "use strict" at the beginning of a script, it has global scope

// Deleting a variable, function or object is not allowed in strict mode

"use strict";
let x = 10;
delete x; 
// Output:
// SyntaxError: Delete of an unqualified identifier in strict mode.

function myFunction(){
    console.log("Hello")
}
delete myFunction;
// Output:
// SyntaxError: Delete of an unqualified identifier in strict mode.

let person = {
    name: "Mehedi",
    age: 24
}
delete person;
// Output:
// SyntaxError: Delete of an unqualified identifier in strict mode.