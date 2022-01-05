/*
Let’s add a new method to the object person1
with the same name as the method in the Person.prototype object
*/
function Person(name){
    this.name = name;
}
Person.prototype.City = function(){
    return `${this.name} is from Dhaka`;
}

let person1 = new Person("Mehedi");
person1.City = function (){
    return `${this.name} is from CTG`;
}

console.log(person1.City())

/* Output: Mehedi is from CTG

Because the person1 object has the City() method,
JavaScript just executes it immediately without
looking it up in the prototype chain.
*/