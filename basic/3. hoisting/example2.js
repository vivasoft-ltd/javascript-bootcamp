
hoistedSuccess(); // Hoisted

function hoistedSuccess() {
        console.log("This is Function Statement and it is hoisted");
    }

{/*
output:
This is Function Statement and it is hoisted
*/} 


hoistedFailed(); // Hoisted

const   hoistedFailed =()=>{
        console.log("This function expression so it is not hoisteed.");
    }

{/*
output:
Uncaught ReferenceError: hoistedFailed is not defined
*/}  