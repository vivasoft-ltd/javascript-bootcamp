// Non-Primitive datatypes(Function, Array, Object)
// maintain call by reference.
// Non-Primitive - 3.Function
let a = () => {
  console.log("function");
};
let b = () => {
  console.log("function");
};
console.log(a == b); // Output : false

// Although here the values are the same but Function is a non-primitive datat type.
//As non-primitive data types caompare them by their reference in memory heap that's
// why the output is false here.
