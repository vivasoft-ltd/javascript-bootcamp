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