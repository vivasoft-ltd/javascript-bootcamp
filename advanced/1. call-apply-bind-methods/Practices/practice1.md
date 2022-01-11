
Consider the code below. Do you think this code snippet will throw an error?
If yes then use bind(), call() and apply() methods separately to make this code work.

```javascript
const greeting = {
    name: "Anik",
    greetingMessage: "Hello",
    getGreeting: function() {
        var greeting = this.greetingMessage + ", " + this.name;
        return greeting;
    }
}

function printGreeting(welcomeMessage) {
    console.log(this.getGreeting() +  welcomeMessage);
}

printGreeting();
```