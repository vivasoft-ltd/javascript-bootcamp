// Non-Primitive datatypes(Function, Array, Object)
// maintain call by reference.
// Non-Primitive - 1.Object
let obj1 = {
  name: "p1",
  age: 30,
  work() {
    console.log("Software Engineer");
  },
};
let obj2 = obj1;

console.log(obj1.name); // Output : p1
console.log(obj2.name); // Output : p1
obj2.name = "p2";
console.log(obj1.name); // Output : p2
console.log(obj2.name); // Output : p2
