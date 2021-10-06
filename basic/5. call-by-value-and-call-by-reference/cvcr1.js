// Primitive datatypes(string, boolean, Number, Symbol, BigInt, null, undefined)
// maintain call by value.

//  string (pass by value)
let str = "This is a string";
console.log(str); // Output : This is a string
console.log(str[3]); // Output : s
str[3] = "z";
console.log(str); // Output :  This is a string
console.log("cvcr");

//primitive data types compare themselves with their values
let str2 = "This is a string";
let str3 = "This is a string3";
console.log(str == str2); // Output : true
console.log(str == str3); // Output : false
