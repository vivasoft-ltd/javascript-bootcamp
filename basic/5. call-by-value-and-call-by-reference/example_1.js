/* Call By Value of primitives types এর উদাহরণ */

function multiplyByTen(value) {
  value = value * 10;
}

var number = 7;

console.log("Before call: number = " + number); // 7

multiplyByTen(number);

console.log("After call: number = " + number); // 7

/* Call By Reference of non-primitives types  এর উদাহরণ */

function passByReference(person) {
  person.name = "Alex";
}

var alam = { name: "Alam" };

console.log(alam.name);
// Alam

passByReference(alam);

console.log(alam.name);
// Alex
