{
    /*
    When we are putting a code block inside setTimeout() function,
    we're actually declaring that code to be asynchronous. JS will 
    send that code to the setTimeout() web api and after that it will be added
    to the task queue/callback queue. The event loop will it's work from that point.
    */
}

console.log("First console");
setTimeout(() => {
    console.log("First setTimeout");
}, 1000);
console.log("Second console");
setTimeout(() => {
    console.log("Second setTimeout");
}, 0);

{
    /*
    Output:
        First console
        Second console
        Second setTimeout
        First setTimeout
    */
}

