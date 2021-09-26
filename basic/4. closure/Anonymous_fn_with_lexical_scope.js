{/*
Here the Anonymous function (within multiply function) creates a closure with x.
so when multiply function called , it returns Anonymous function. We define that 
function in multiplyFive variable.Although multiply function already called and 
remove from the call stack but multiplyFive  have now the access of variable x from closure.
*/}

const multiply = (x)=> {
    return function(y) {
        return x * y;
    }
}

let multiply10 = multiply(10);
let multiplyFive = multiply10(5);

console.log(multiplyFive); 

//Output 50
