var outerVar= "Hi , this is outer variable.";

function hoistingFunc() {
  console.log(outerVar);
  var outerVar = "Hi , this is inner variable.";
  console.log(outerVar);
}

hoistingFunc();

{/*
output:
undefined
Hi , this is inner variable.
*/}
