var a = 10;
function xoo() {
  console.log(a); //output : undefined
  var a = 50;
  console.log(a); // output : 50
}
xoo();
