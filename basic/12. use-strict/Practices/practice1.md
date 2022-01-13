
Consider this code below. Will it give an error?

```javascript
let name = "Mehedi";

function printName(name){
    "use strict"
    console.log(name);
    let age = 24;
    delete age
}
```