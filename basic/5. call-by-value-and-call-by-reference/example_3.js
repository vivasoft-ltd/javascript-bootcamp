// Call by value for primitive type.

var a = 5;
var b;
b = a;
a = 3;
console.log(a);        // Output: 3
console.log(b);        // Output: 5

// call by reference for object type

var obj1 = { test : 'Test message 1' };
var obj2;
obj2 = obj1;

obj1.test = 'Test message 2';
console.log(obj1);     // Output: { test: Test message 2 }
console.log(obj2);     // Output: { test: Test message 2 }