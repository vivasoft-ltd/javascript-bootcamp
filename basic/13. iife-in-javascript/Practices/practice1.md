
Consider the code written below. 
What will be the output of this code?

```javascript
function sayHello()
{
    console.log("Hello!");
    (function(){
        console.log("Nice to meet you");
        (function(){
            console.log("I want to tell you")
        })();
    })();
    console.log("something you want to hear");
}
  
// Calling the parent function.
sayHello();
```