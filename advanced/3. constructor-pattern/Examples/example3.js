/*
Here 'mehedi' is an object of contructor function 'Person' and
we can also add extra properties to the object which
will not be property of constructor 'Person'
*/

function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName =function () {
        return this.firstName + this.lastName;
    }
}

let mehedi = new Person("Mehedi", "Zamadar");
mehedi.age = 24;
console.log(mehedi.age) // Output: 24

mehedi.hello = function (){
    return "Hello";
}
console.log(mehedi.hello()) // Output: Hello