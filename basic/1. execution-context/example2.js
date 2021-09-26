 {/*

    Time Tide and Javascript waits for none.
    The function fn has an asynchrous function  setTimeout 
    with a timer of 5 sec. As we know javascript has only a call stack 
    to execute all code, so it never waits for the timeout.
    Js engine will send the function to the dom api 
    and move on to the next line of code
*/}

console.log('first output of global execution context')

function fn(){
    console.log('waiting for timeout...')
    setTimeout(()=>{
        console.log('Output in Functions local execution contex')
    },5000)
}

fn()
console.log('last output of global execution context')

{/*
output:
first output of global execution context
waiting for timeout...
last output of global execution context
Output in Functions local execution contex

ie:Time and Js wait for none
*/}