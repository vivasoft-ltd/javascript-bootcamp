{
    /*
    Promises are not added to the callback queue. Instead it gets added to
    the micro task queue which has a higher priority than the task queue.
    The tasks existing in the micro task queue get pushed to the call stack 
    by the event loop first. 
    */
}

firstPromise = new Promise((resolve) => {
    resolve("First promise.")
});
secondPromise = new Promise((resolve) => {
    resolve("Second promise.")
});
console.log("First console.")
setTimeout(() => console.log("First setTimeout."), 1000);
setTimeout(() => console.log("Second setTimeout."));
firstPromise.then(response => console.log(response));
secondPromise.then(response => console.log(response));

{
    /*
    Output:
        First console.
        First promise.
        Second promise.
        Second setTimeout.
        First setTimeout.
    */
}


       