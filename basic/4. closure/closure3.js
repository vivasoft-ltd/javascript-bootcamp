//closure + setTimeout
console.log("start");
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log("end");

//output will be :
// start
// end
// (after 1 second)
// 6
// 6
// 6
// 6
// 6
//Description :
// এখানে unexpected output আসার reason হচ্ছে closure.
// Closure is like a function along with its lexical environment. যদি function কে তার original scope থেকে বের করে নিয়ে অন্য কোন scope এ নিয়ে execute করা হয়, still সে তার lexical environment কে মনে রাখে এবং তার lexical scope এর variables কে use করতে পারে। এক্ষেত্রে function টি তার lexical scope এর variables এর reference কে মনে রাখে, তার value কে নয়।
// এখানে for loop টি frist time run হওয়ার সময় এখানে function এর সাথে একটি Timer attach করা হয় এবং i এর reference কে মনে রাখে। এখানে function এর 5 টি copy ই i এর same reference (same memory space) কে point করছে কারণ, সবগুলো function এর জন্য এখানে environment same.
// Again javascript কারো জন্য wait করে না। এখানে loop চলতে থাকবে এবং setTimeout এই ৫ টি function কে store করে দিবে এবং javascript চলতে থাকবে।javascript Timer এর expiration এর জন্য wait করবে না। যখন বাকিসব কাজ শেষ হবে এবং Timer expire হয়ে যাবে ততক্ষণে এটা অনেক দেরী হয়ে যাবে। এসময় memory location এ  i এর মান 6 থাকবে। তাই 5টি callback function ই তখন 6 print করবে।
