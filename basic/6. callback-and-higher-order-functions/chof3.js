// Array Method
function calculator5(arr, work) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(work(arr[i]));
  }
  return newArray;
}
console.log(calculator5([5, 10, 15, 20], add5));
console.log(calculator5([5, 10, 15, 20], sub5));
console.log(calculator5([5, 10, 15, 20], mul5));
function add5(a) {
  return a + 5;
}
function sub5(a) {
  return a - 5;
}
function mul5(a) {
  return a * 5;
}
