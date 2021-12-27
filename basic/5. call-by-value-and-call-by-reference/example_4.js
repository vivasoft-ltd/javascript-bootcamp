// call by value

function printGreeting(greetName) {  
    greetName = "Hello, " + greetName;  
    console.log("New value: " + greetName);  // Output: Hello, Anik
}  
var greetName = 'Anik';
printGreeting(greetName);  
console.log("Old value: " + greetName);  // Output: Anik 

// call by reference

function modifyObj(person) {  
    person.name = 'Fahim';  
    person.age = 26;  
}  

var person = {  
    name: 'Anik',  
    age: 25
};   

console.log("Initial name value: " + person.name); // Initial name value: Anik
modifyObj(person);  
console.log("Updated name value: " + person.name); // Udated name value: Fahim

