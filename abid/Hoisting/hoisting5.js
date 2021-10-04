let x = 10;
function foo() {
  console.log(x); //output : undefined
  var x = 20;
  console.log(x + y); //output : undefined
  var y = 100;
  console.log(x + y); //output : 120
}
foo();
