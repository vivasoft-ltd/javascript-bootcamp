{/*
Here we store the return value for
average(10, 20) in variable x within the global execution context.
So when the average function called, a functional execution 
context will creates for function average inside the call stack.
Inside average we call function add. so Another functional
 execution context will  create for add function in the call stack.
 When the add function return anything then the 
 functional execution context will be removed from the call stack
 and the return value will be returned to the functional execution 
 context of average from where the function add was called.
 Again when average function return anything then 
 its functional execution context will also removed from
 the call stack and the return value will also returned th 
 the global execution context  from where the average function was called


*/}

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20); 
console.log(x)

{/*
output:
15
*/}