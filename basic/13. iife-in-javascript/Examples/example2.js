/*
We can use IIFEs to create private variables and functions 
within the global scope, or any other function scope.
*/

function sayName(){
    return "Hello! I am Mehedi";
}

console.log(sayName())

var myNumber = 100;
console.log(myNumber*2)

/*
If we load other JavaScript files in our browser, 
they also gain access to sayName() and myNumber. 
To prevent them from using or editing them, we encase our code in an IIFE like this code bolw:
*/
(function(){
    function sayName(){
        return "Hello! I am Mehedi";
    }
    
    console.log(sayName())
    
    var myNumber = 100;
    console.log(myNumber*2)
})();
// It runs the same, but now sayName() and myNumber are only accessible in our script.
