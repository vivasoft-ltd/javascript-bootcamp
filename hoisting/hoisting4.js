greet(); //uncaught Referenceerror greet is not defined

let greet = function() {
    console.log('Hi, there.');
}
//if var should be declared in the place of let then it will be uncaught typeerror:gree is not a function
greet(); //uncaught typeerror greet is not a function

var greet = function() {
    console.log('Hi, there.')
}