/*
Here x is not in the scope anymore but we can
still access it by using 'arr' array. That means it stays
in the memory untill the reference is there.

If we pop it from the array, it won't be needed anymore and can be garbage collected.
*/

let arr = []
function addName() {
   let x = {name: "Mehedi"}
   arr.push(x)
}
addName()
console.log(arr[0]) // Output: { name: 'Mehedi' }
arr = null;
console.log(arr) // Output: null

// Now the reference to properties of 'x' is null
// So it is garbage collected


