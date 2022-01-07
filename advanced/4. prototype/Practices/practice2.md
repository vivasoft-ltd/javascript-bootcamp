
Consider the code below. Can the person1 object directly access the 'prototype' object?
What do you think the output will be?

```javascript
function Person(name){
    this.name = name;
}
Person.prototype.City = function(){
    return `${this.name} is from Dhaka`;
}

let person1 = new Person("Mehedi");

console.log(person1.prototype.City())
```