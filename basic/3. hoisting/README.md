এই লেখাটি পড়ার আগে আমার **Execution Context** এবং **Scope** নিয়ে লেখা দুটি আর্টিকেল পড়ে আসতে বলবো। তাহলে **Hoisting** বুঝতে আপনার জন্যে অনেক সহজ হয়ে যাবে।

১। [Execution Context](https://shahansdiary.com/execution-context-in-javascript/)

২। [Scope](https://shahansdiary.com/what-is-scope-in-javascript/)

### Hoisting কি?

> **Hoisting** হচ্ছে জাভাস্ক্রিপ্ট এমন একটি পদ্ধতি যেখানে কোড এক্সিকিউশন করার আগে ভ্যারিয়েবল এবং ফাংশন ডিক্লেয়ারেশনগুলোকে তার বর্তমান **Scope** - এর শুরুতে নিয়ে যায়।

উদাহরণস্বরূপঃ

```js
	function hoisting() {
   	 console.log(message);
   	 var message='Hi there, We are learning Hoisting!'
	}

hoisting(); // Ouput: undefined
```
উদাহরণের ব্যাখ্যা দেওয়ার আগে Hoisting সম্পর্কে কিছু কথা বলে নেই। যখন আমরা কাউকে Hoisting বুঝায় উপরের সংজ্ঞাটা দিয়েই বুঝায়। কিন্তু আসলেই  কি জাভাস্ক্রিপ্ট তার সকল ভ্যারিয়েবলস এবং ফাংশন ডিক্লেয়ারেশনগুলোকে তার স্কোপের উপরে নিয়ে যায়? না, জাভাস্ক্রিপ্ট এমনটা কখনো করে না। যদি আপনি আমার [Execution Context](https://shahansdiary.com/execution-context-in-javascript/) নিয়ে লেখাটা পড়ে থাকেন, তাহলে আপনি জানেন যে যখন আপনি জাভাস্ক্রিপ্টের কোন কোড এক্সিকিউট করেন, জাভাস্ক্রিপ্ট ইঞ্জিন গ্লোবাল এক্সিকিউশন কন্টেক্সট তৈরি করে।

গ্লোবাল এক্সিকিউশন কন্টেক্সট এর দুটি phase আছে: **creation** এবং **execution**। creation phase চলার সময়, জাভাস্ক্রিপ্ট ইঞ্জিন সকল ভ্যারিয়েবলকে **undefined** হিসাবে ইনিশিয়ালাইজ করে। এবার চলুন আমরা **Hoisting**-এ ফিরে যাই।

জাভাস্ক্রিপ্টে **Hoisting** হচ্ছে দুই প্রকার। ১. **Variable Hoisting** এবং ২. **Function Hoisting**।

১. Variable Hoisting

```js
	console.log(hoistingIntro); // Outpur: undefined

	var hoistingIntro = "Hi there, I am a string one.";
```

উপরের console.log এর আউটপুট কি হবে? একটু চিন্তা করুন সময় নিয়ে। যাইহোক, উপরের কোডে কোন ভুল নেই। কারণ আমরা জানি জাভাস্ক্রিপ্ট ইঞ্জিন **Creation phase**-এ ভ্যারিয়েবল ডিক্লেয়ারেশনকে **undefined** হিসাবে ইনিশিয়ালাইজ করে। তাই, **Execution phase**-এ আউটপুট **undefined** হচ্ছে কারণ আমরা তার ভ্যালু ইনিশিয়ালাইজ হওয়ার আগেই log করে ফেলেছি। টেকনিক্যালি, কোডটি Execution phase-এ  নিম্নলিখিত কোডের মত দেখাবেঃ

```js
	var hoistingIntro = undefined;

	console.log(hoistingIntro); // output: undefined
	hoistingIntro = "Hi there, I am a string one.";
```

### ২। Functions Hoisting

ভ্যারিয়েবলের মত ফাংশনও Hoisted হয়। তাই আপনি আগে ফাংশন কল করে পরে ফাংশন ডিক্লেয়ার করতে পারবেন।

```js
	hoistedFunc(); // Hoisted

	function hoistedFunc() {
		console.log("Hoisted.");
	}
```
বিঃ দ্রঃ একটি কথা ভাল করে মনে রাখবেন যে জাভাস্ক্রিপ্ট ফানশন এক্সপ্রেশনের ক্ষেত্রে কোন Hoisting করে না।

```js
	hoistedFunEx(); // TypeError: hoistedFunEx is not a function

	 var hoistedFunEx = function() {
  	  console.log("Hoisted.");
	}
```
আপনাদের জন্যে একটি হোম টাস্ক। নিচের কোডের দুইটা console.log এর আউটপুট কি হবে? চাইলে কমেন্ট করে জানাতে পারেন। :) 

```js
var hoistingIntro = "Hi there, I am a string one.";

function hoistingFunc() {
  console.log(hoistingIntro);
  var hoistingIntro = "Hi there, I am a string two";
  console.log(hoistingIntro);
}

hoistingFunc();
```
