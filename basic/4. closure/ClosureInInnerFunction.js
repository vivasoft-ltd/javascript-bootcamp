//ex:1
function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  }
  add()
  add()
  add()
{/*
output:
1
*/}  

//ex:2
//closure in self invoking function
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  console.log(add)
  add();
  console.log(add)
  add();

  3

{/*
output:
3

ie:A closure is a function having access to the parent scope,
 even after the parent function has closed
*/}