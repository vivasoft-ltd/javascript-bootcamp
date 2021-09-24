var a = 4;

function greet() {
    console.log(b); 
    b = 'hello';
    
    var b;
}

greet(); // undefined
console.log(b);// variable is not defined