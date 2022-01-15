### Scope কি?

> **Scope** মূলত একটা নির্দিষ্ট সীমানাকে বোঝায়। যার বাহিরে **Variable** এবং **Function**-গুলো এক্সেসিবল না। যদি এই সীমানার বাহিরে কোন **Variable** এবং **Function** কে কল করা হয় তাহলে তার কোন অস্তিত্ব থাকবে না। একটি কথা ভাল করে মাথায় সংরক্ষণ করে রাখেন যে, জাভাস্ক্রিপ্টে একমাত্র তখনই **Scope** তৈরি হয়, যখন আমরা কোন **function** ইনভোক বা কল করি। হ্যাঁ, **function** ছাড়া আর কোথাও **Scope** তৈরি হয় না। আর এই **Scope** হচ্ছে দুই প্রকার- ১. **Global Scope** এবং ২. **Local Scope**।

### ১. Global Scope

জাভাস্ক্রিপ্টে বাই ডিফল্ট সব কিছু **Global Scope** - এ রান হয়। যার এক্সেসিবল সব জায়গায় থাকে। উদাহরণস্বরূপ-

```js
var globalVariable = "I am global variable.";
console.log(globalVariable); // I am global variable.

var myFunc = function () {
  console.log(globalVariable);
};

myFunc(); // I am global variable.
```

উপরের কোডটুকু রান করলে দেখতে পারবেন যে globalVariable নামের ভেরিয়েবলটিকে সব যায়গায় ব্যবহার করা যাচ্ছে এবং সবার আউটপুটও একই দেখাচ্ছে।

### ২. Local Scope

আগেই বলেছিলাম যে, জাভাস্ক্রিপ্ট একমাত্র তখনই **Scope** তৈরি করে যখন কোন **Function** কে ইনভোক বা কল করা হয়। এই **Scope** কেই বলা হয় **Local Scope**। মানে হচ্ছে, তার ভিতরে যা কিছু থাকবে তার নিজস্ব **Scope** - এর বাহিরে এর কোন অস্তিত্ব থাকবে না। অর্থাৎ, তার **Scope** - এর ভিতরে লেখা কোন ভেরিয়েবলকে যদি আমরা বাহিরে অন্য কোথাও ব্যবহার করতে চাই তাহলে জাভাস্ক্রিপ্ট খুব সুন্দর করে একটি আনকট রেফারেন্সে ইরর দিয়ে বলে দিবে যে খোকা তুমি যাকে ব্যবহার করতে চাচ্ছ সে তো কোথাও ডিফাইন করা নেই। চলুন একটা উদাহরণ দিয়ে দেখা যাক-

```js
var globalVariable = "I am global variable.";

var myFunc = function () {
  var localVariable = "I am local variable.";

  console.log(globalVariable);
  console.log(localVariable);
};

myFunc();
// I am global variable.
// I am local variable.

console.log(localVariable); // undefined
```

উপরের কোডটুকু রান করলে দেখতে পারবেন যে প্রথমে দেখাচ্ছে I am global variable. এবং I am local variable. তারপর অতি ভদ্রতার সাথে খুব সুন্দর করে এরর দিয়ে বলে দিছে যে **Uncaught ReferenceError: localVariable is not defined**।

### Lexical Scoping কি?

এখন সবার মনে প্রশ্ন আসতে পারে যে, এই **Lexical Scoping** - টা আবার কি? একটু অপেক্ষা করেন মাথা গরম করার কোন দরকার নেই। আসলে জাভাস্ক্রিপ্টকে বলা হয় **Lexical Scoping** ল্যাঙ্গুয়েজ। আমরা ফাংশনের ভিতরে আমাদের প্রয়োজন অনুযায়ী একাধিক ফাংশন তৈরি করতে পারি এবং চাইল্ড ফাংশনগুলো তার প্যারেন্ট ফাংশনের সব ভেরিয়েবলস এবং আর্গুমেন্টেসের এক্সেস পায়। কিন্তু আউটার ফাংশনগুলো তার চাইল্ড ফাংশনের ভেরিয়াবলস এবং আর্গুমেন্টসের কোন এক্সেস পায় না। এই যে চাইল্ড ফাংশনগুলো তার প্যারেন্ট ফাংশনের ভেরিয়েবলস এবং আর্গুমেন্টেসের এক্সেস পাচ্ছে এই এক্সেস পাওয়াকেই বল হয় **Lexical Scoping**।

```js
function outerFunc(a) {
  var outerFuncVariable = "Hi there, I am outer " + a;

  console.log(outerFuncVariable); // Hi there, I am outer function variable

  function innerFunc() {
    var innerFuncVariable = "Hi there, I am inner " + a;
    console.log(innerFuncVariable); // Hi there, I am inner function variable
  }

  innerFunc(); 

  console.log(innerFuncVariable); // undefined
}

outerFunc("function variable");
```

**নোটসঃ**

- জাভাস্ক্রিপ্টের গ্লোবাল স্কোপ এবং লোকাল স্কোপ আছে।
- যে কোন ফাংশনের বাইরে ডিক্লেয়ারড এবং ইনিশিয়ালাইজড ভ্যারিয়েবলগুলো গ্লোবাল ভ্যারিয়েবল হয়ে যায়।
- ফাংশনের ভিতরে ডিক্লেয়ারড এবং ইনিশিয়ালাইজড ভ্যারিয়েবলগুলো সেই ফাংশনের লোকাল ভ্যারিয়েবল হয়।
- গ্লোবাল ভ্যারিয়েবলগুলো প্রোগ্রামের যেকোন জায়গায় অ্যাক্সেস এবং পরিবর্তন করা যেতে পারে।
- ফাংশন ডিক্লেয়ারেশনের বাইরে লোকাল ভ্যারিয়েবল সমূহ অ্যাক্সেস করা যাবে না।
- গ্লোবাল ভ্যারিয়েবল এবং লোকাল ভ্যারিয়েবল একই নাম থাকতে পারে। কিন্তু একই নাম ব্যবহার না করায় ভালো।


### আরও বাংলা টিউটোরিয়াল 
> - [জাভাস্ক্রিপ্টঃ স্কোপ(Scope) নিয়ে ধারণা](https://js.zonayed.me/basic/post-15)  

> - [জাভাস্ক্রিপ্ট স্কোপ (JavaScript Scope)](http://bangla.salearningschool.com/recent-posts/জাভাস্ক্রিপ্ট-স্কোপ-javascript-scope/)


### বাংলা ভিডিও টিউটোরিয়াল 
> - [JavaScript Scope and Hoisting Explained | JavaScript Bangla Tutorial](https://www.youtube.com/watch?v=6_4NcQQvxmM)

> - [Scope and Scope Variables | Ultimate Beginner JavaScript Course](https://www.youtube.com/watch?v=HZZ0X2Toiok&t=40s)


> - [Javascript Behind The Scene Scope Chain and Lexical Scope in Bangla](https://www.youtube.com/watch?v=LPB6oT_pvu4)
