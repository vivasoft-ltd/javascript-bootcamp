{/*
There are three types of Execution Context in javascript.  
1.Global Execution Context(GEC)
2.Functional Execution Context(FEC)
3.Eval Execution Context

Any JS code that gets executed within the eval function creates 
and holds its own execution context. However,
 the eval function is not used by the JavaScript developers,
  but it is a part of the Execution Context.
 

At first the program will execute inside the
 global execution context. But if the program call a function
then it will creates a new functional execution context.
When function return anything then the FEC will be removed from call stack
and returned value will be pass into  the GEC again
the 
*/}

let x = 10;

function timesTen(a){
    return a * 10;
}

let y = timesTen(x);

console.log(y); 

{/*
output:
100

*/}
