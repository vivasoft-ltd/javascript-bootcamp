
{/*
Time Tide and Javascript waits for none.
    The function fn has an asynchrous function  setTimeout 
    with a timer of 5 sec. As we know javascript has only a call stack 
    to execute all code, so it never waits for the timeout.
    Js engine will send the function to the dom api 
    and move on to the next line of code
*/}


onsole.log('First Output Inside the Global Execution context')

function fn1(){
    setTimeout(()=>{
        console.log('Inside function fn1 with the SetTimeout of 3 seconds')
    },3000)
}

function fn2(){
    console.log('inside function fn2')
}

setTimeout(()=>{
    console.log('Inside the Global Execution context With SetTimeout of 10 seconds')
},10000)

setTimeout(()=>{
    console.log('Inside the Global Execution context With SetTimeout of 3 seconds')
},3000)

fn1()
fn2()
fn3()

function fn3(){
    console.log('Inside function fn3')
}

console.log('Last line Output of Global Execution Context')


{/*

output:
First Output Inside the Global Execution context
inside function fn2
Inside function fn3
Last line Output of Global Execution Context
Inside the Global Execution context With SetTimeout of 3 seconds
Inside function fn1 with the SetTimeout of 3 seconds
Inside the Global Execution context With SetTimeout of 10 seconds
*/}