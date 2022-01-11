"use strict";
let bike = {
  brand: "TVS",
  getBrand: function () {
    return this.brand;
  },
};

console.log(bike.getBrand()); // TVS

// নিচের comment এর ফলাফল undefined। কারণ globally এটি strict মোডে undefined এবং non-strict মোডে global object।

/*
let brand = bike.getBrand;

console.log(brand()); // undefined.
*/

// এই সমস্যা সমাধানের জন্য আমাদের বাইন্ড ব্যবহার করতে হবে

let brand1 = bike.getBrand.bind(bike);
console.log(brand1()); // TVS

let bike2 = {
  brand: "SINGER",
};
let brand2 = bike.getBrand.bind(bike2);
console.log(brand2()); // SINGER

let bike3 = {
  brand: "DISCOVER",
};

let brand3 = bike.getBrand.bind(bike3);
console.log(brand3()); // DISCOVER
