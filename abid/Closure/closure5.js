//closure + setTimeout
console.log("start");
for (var i = 1; i <= 5; i++) {
  let closure = (x) => {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  };
  closure(i);
}
console.log("end");

//output will be :
// start
// end
// (after 1 second)
// 1
// 2
// 3
// 4
// 5
//Description :
// var দিয়ে 1, 2, 3, 4, 5 output না হওয়ার কারণ ছিল, i এর copy টা same memory location কে refer করছিল। তো  আমাদের যা করা লাগবে তা হচ্ছে somehow i এর একটা new copy provide করা লাগবে যাতে setTimeout function তার সাথে bundled হয়ে closure তৈরি করতে পারে।
// আমরা closure নামে একটা function তৈরি করলাম এবং setTimeout function কে এর ভিতরে enclose করলাম। এখন আমার চাচ্ছি যে, যতবার for loop টা execute হবে, আমরা যাতে i এর একটা করে new copy পাই(which is i=i+1). তাই আমরা closure function invoke করার সময়, i কে argument হিসেবে pass করব এবং parameter হিসেবে নিব।ফলে যতবার closure function invoke হবে, ততবারই, i এর একটা new copy পাওয়া যাবে এবং ততবারই setTimeout function i এর new copy কে মনে রাখবে এবং তার সাথে bundled হয়েclosure তৈরি করবে।
