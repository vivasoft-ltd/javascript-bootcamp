{
    /*
    One fun thing about prototypes is even the prototype of a function has 
    it's own prototype. This is called prototype chaining. In the example below,
    the nesting of prototypes can be used to add properties to different layers of 
    prototype objects which are accessible to us later. We have added the property
    'profession' to the prototype of Person's prototype. As you can see below that 
    we are also able to update the value of that property later. 
    */
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.__proto__.__proto__.profession = 'Software Engineer';
person1 = new Person("Anik", 25);
console.log(person1.profession);            // Software Engineer
person1.profession = 'Businessman';
console.log(person1.profession);            // Businessman