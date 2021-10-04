var a = 10;
function xoo() {
  console.log(a); //output :Uncaught ReferenceError
  let a = 50;
  //we cannot access let variable before initialization
}
xoo();
