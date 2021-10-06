function calculator(work, a, b) {
  console.log(work(a, b));
}
calculator(add, 10, 5); // output : 15
calculator(sub, 10, 5); // output : 5
calculator(mul, 10, 5); // output : 50
calculator(div, 10, 5); // output : 2

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
