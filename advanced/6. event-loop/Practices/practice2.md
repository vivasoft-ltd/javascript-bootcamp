
We know event loop has different priorities when
it comes to promise and setTimeout. Then what
will be the output of this code?

```javascript
setTimeout(function(){
    console.log("first message")
    setTimeout(function(){
        console.log("second message")
    }, 1000)
}, 0)
runforNSceconds(3)
console.log("third message")

let promise = new Promise(function(resolve, reject){
    resolve()
})

promise.then(function(resolve){
    console.log("fourth message from promise 1")
})
.then(function(promise){
    console.log("fifth message from promise 2")
})

console.log("sixth message")

function runforNSceconds(sec){
    let start = Date.now(), now = start;
    while(now-start< (sec*1000)){
        now = Date.now()
    }
}
```