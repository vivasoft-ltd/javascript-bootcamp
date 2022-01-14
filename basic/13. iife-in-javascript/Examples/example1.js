/* 

IIFE follow their own scope like any other function/variable in JavaScript.
It is confusing sometimes that we might expect the IIFE 
to execute irrespective of function scope, which is wrong.
In this example where the IIFE is defined within a function 
and will only be immediately invoked if we call the Parent Function.

*/

function sayName()
{
    console.log("Hello!");
    // This will be executed after executing the previous log.
    (function() { console.log("Mehedi"); })();
    console.log("is my name");
}
  
// Calling the parent function.
sayName();
/*
Output:
Hello! 
Mehedi 
is my name
*/