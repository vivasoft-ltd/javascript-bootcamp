What will be the output of this code snippet?


```javascript
promise = new Promise((resolve) => {
    resolve("Promise.");
});

setTimeout(() => console.log("First setTimeout."), 0);

promise.then((res) => {
    setTimeout(() => console.log(res), 0);
});

setTimeout(() => console.log("Second setTimeout."),0);
console.log("First console.");
```