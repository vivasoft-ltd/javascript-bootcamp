// Non-Primitive datatypes(Function, Array, Object)
// maintain call by reference.
// Non-Primitive - 2.Arrays
let arr = ["Aaa", "Bbb", "Ccc", "Ddd"];
console.log(arr[2]); // Output : Ccc
arr[2] = "Zzz";
console.log(arr[2]); // Output : Zzz

let newArr = arr;
newArr[2] = "NewZzz";
console.log(`value of arr[2] = ${arr[2]}`); // Output : NewZzz
console.log(`value of newArr[2] = ${newArr[2]}`); // Output : NewZzz
console.log(arr[2] == newArr[2]); // Output  true
s;
