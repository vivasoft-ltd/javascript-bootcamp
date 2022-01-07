
What will be the output of this code?
How can we access the functions inside factory function?

```javascript
function person (name, sport) {
    function saySport(){
        return " who loves "+sport;
    }
    function sayName(){
        return "My name is "+ name +saySport();
    }
    return {
        talk: function(){
            console.log('Hello, '+sayName())
        }
    }
}

let person1 = person("Mehedi", "Cricket");
console.log(person1.saySport())
```
