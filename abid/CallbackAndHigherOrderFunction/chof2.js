function divBy2(x, fn3) {
  return fn3(x % 2 == 0 ? "even" : "odd");
}
console.log(divBy2(4, divBy3));

function divBy3(x) {
  return x % 3 == 0 ? "divisible by 3" : "not divisible by 3";
}
