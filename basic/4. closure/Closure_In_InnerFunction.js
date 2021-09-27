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
{/*
  Closure in self invoking function
  A closure is a function having access to the parent scope,
 even after the parent function has closed.
Here the self invoking  Anonymous function will create closure with counter variable. 
and  each time the add function called , Anonymous function function will execute 
and increment the value of counter(closure) by 1.
 */}

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();

  3

{/*
output:
3

*/}