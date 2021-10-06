//closure + setTimeout
console.log("start");
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
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
// Let has a block scope. এজন্যে প্রতিবার loop iteration এর সময় এই i টার একটা new variable(new copy of i) হিসেবে পাওয়া যায়। এবং প্রতিবার setTimeout function run হওয়ার সময় callback function টি প্রতিবার i এর একটি করে নতুন copy পায়। ফলে যতবার setTimeout function টি run হয়, ততবারই সে i এর new value এর সাথে bundled হয়ে closure তৈরি করে। অর্থাৎ, প্রতিটি iteration এ i এর new copy পাওয়া যায়।

// So, i=1 হলে, যখন i++ করি তখন i=2 একটি new copy of variable, যা white marked function এর সাথে bundled হয়ে একটি closure তৈরি করবে। ঐ function টি তখন তার boundary তে i  এর একটি new value পাবে, যা সে মনে রাখবে(save রাখবে)।
// Similar ভাবে i++ হয়ে যখন i=3 হবে, তখন callback(white marked) function টি তার boundary তে i=3 কে একটি fresh new variable হিসেবে পাবে এবং i=3 এর সাথে bundled হয়ে একটি closure তৈরি করবে।

// এভাবে ৫ বারের iteration এ callback function টি i এর 5 টি new fresh variable এর সাথে bundled হয়ে closure তৈরি করবে।

// সহজভাবে বলা যেতে পারে যে, প্রতিবার এই callback function call হওয়ার সময়, এটা প্রতিবার separate memory location থেকে তার scope এ separate copy of i এর সাথে bundled হয়ে closure তৈরি করে।
// In a nutshell, let block scope হওয়ায়, যতবারই এই loop টি execute হয়, let i এর নতুন নতুন copy তৈরি করে।
