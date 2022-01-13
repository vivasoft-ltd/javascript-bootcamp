/*
Event though setTimeout has a delay of 0s and 
while loop has 5s delay, event loop will wait until
the call stack is empty.
The while loop keeps on running on the call stack until 5s has elapsed
*/

function myFunc (){
    console.log('first')
    setTimeout(function hello(){
        console.log('second')
    }, 0)
    runforNSceconds(5)
    console.log('third')
}

myFunc()

function runforNSceconds(sec){
    let start = Date.now(), now = start;
    while(now-start< (sec*1000)){
        now = Date.now()
    }
}

/*
Output:
first
third
second
*/