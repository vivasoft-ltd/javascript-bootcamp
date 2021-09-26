{
  /*
Global Execution Context
GEC / Global Execution Context is also called 
the base/default execution. Any JavaScript
 code which does not reside in any function
  will be present in the global execution context. 
  The reason behind its name 'default execution
   context' where the code begins its execution 
   when the file first loads in the web browser. 
   GEC performs the two following tasks:

Firstly, it creates a global object where it is 
for Node.js and Window object for the browsers.
Secondly, reference the Windows object to 'this' keyword.
Create a memory heap in order to store variables and function references.
Then it stores all the functions declarations in the memory
 heap area and the variables in the GEC with initial values as 'undefined'.

 Function statement is hoisted , so we can called a function statent before the 
  declarations
  
*/
}

let globalVar = "Variable from Global skope";

function a() {
  console.log("Inside a");
  console.log(globalVar);
  console.log();
  let x = "functional skope of function a";
  b();

  function b() {
    console.log("Inside b");
    let y = "functional skope of function b";
    console.log(globalVar);
    console.log(x);
    console.log();
    c();

    function c() {
      console.log("Inside c");
      let y = "functional skope of function b";
      console.log("value of x : ", x);
      console.log(globalVar);
      console.log(y);
      var x = "functional skope of function c";
      console.log("value of x : ", x);
    }
  }
}
a();

{
  /*

output:
Inside a
Variable from Global skope
Inside b
Variable from Global skope
functional skope of function a
Inside c
value of x :  undefined
Variable from Global skope
functional skope of function b
value of x :  functional skope of function c
*/
}
