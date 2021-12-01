### Event loop

আজকে আমরা জাভাস্ক্রিপ্টের খুবই একটা গুরুত্বপূর্ণ বিষয় নিয়ে আলোচনা করব, তা হল Event Loop. জাভাস্ক্রিপ্ট প্রোগ্রামার বা ডেভেলপার হিসাবে Event Loop সম্পর্কে ধারণা থাকা অত্যন্ত জরুরী। তাই চেষ্টা করবো আজকে Event Loop নিয়ে একটু লেখতে। চলুন শুরু করা যাক।

### Event loop কি?

Event loop জাভাস্ক্রিপ্টের একটি secret machenism যার মাধ্যমে জাভাস্ক্রিপ্ট single-threaded প্রোগ্রামিং ল্যাঙ্গুয়েজ হওয়া সত্ত্বেও বাহ্যিক ভাবে multi-threaded প্রোগ্রামিং ল্যাঙ্গুয়েজের মত কাজ করে। Event loop গভীরভাবে call stack কে পর্যবেক্ষণ করে এবং যদি call stack খালি বা empty থাকে তবে Event queue থেকে Task call stack এ পাঠায় execution সম্পন্ন করার জন্য।

আমরা সকলে জানি, জাভাস্ক্রিপ্ট একটি single-threaded asynchronous প্রোগ্রামিং ল্যাঙ্গুয়েজ । এইটা বিষয় লক্ষ্য করেছেন কি, একটা ল্যাঙ্গুয়েজ কি করে একই সাথে single-threaded আবার asynchronous হতে পারে? আসলে বিষয়টা হল, জাভাস্ক্রিপ্ট একটা single-threaded ল্যাঙ্গুয়েজ; তার মানে হল জাভাস্ক্রিপ্ট একসাথে একই সময়ে একটা মাত্র কাজ ে করতে পারে। আর asynchronous বিষয়টা জাভাস্ক্রিপ্ট ল্যাঙ্গুয়েজের কোন বিষয় না, এটি নিয়ন্ত্রিত হয় ব্রাউজার Enviornment এর মাধ্যমে। কয়েকটি উদাহরন দেখলে বিষয়টা বোঝতে সুবিধা হবে।
চলুন শুরু করা যাক।

```js
function main() {
  console.log('Hi');
  setTimeout(function display() {
    console.log('there');
  }, 1000);
  console.log('JSConfEU');
}
main();
//	Output
//	A
//	C
//  B
```

উপরের কোডটি একটু ভাল করে লক্ষ্য করুন, এখানে প্রথম `console.log('Hi')` এই Statement টি execute হচ্ছে। এরপর একটা setTimeout ফাংশন রয়েছে, যা নিদিষ্ট সময় পর `console.log('there')` এই Statement টি execute করার কথা ছিল। কিন্তু কোন কারণে এই Statement টিকে বাদ দিয়ে তারপরের Statement `console.log('JSConfEU')` এইটিকে execute করছে। এইটির কারণ হল জাভাস্ক্রিপ্টের asynchronous ব্যবহার। জাভাস্ক্রিপ্ট যখনই setTimeout ফাংশনটিকে দেখছে, ঠিক তখনই জাভাস্ক্রিপ্ট বোঝতে পারছে এটি একটি asynchronous ফাংশন । আর আমরা জানি asynchronous ফাংশনের কাজ শেষ হতে কিছু সময়ের প্রয়োজন হয়। তাই জাভাস্ক্রিপ্ট setTimeout ফাংশনটিকে আর `call stack` এ না রেখে, `Browser API` এ পাঠিয়ে দেয়। আর এই `Browser API` তেই setTimeout ফাংশনটি তার নির্ধারিত সময় নিয়ে কাজ টি শেষ করে। কাজ শেষ হবার পর setTimeout ফাংশনটি `Event Queue` তে প্রবেশ করে। এবং পুনরায় `call stack` এ প্রবেশ করার অপেক্ষা করে।
ঠিক এখানে এ `Event Loop` এর কাজ শুরু হয়। `Event Loop` এর কাজ হল Call Stack আর Event Queue এর দিকে লক্ষ্য রাখা। যখন Call Stack খালি হয়ে যায় ঠিক তখন `Event Loop` Event Queue থেকে একটি একটি করে Event call stack এ পাঠায়। এবং call stack ওই অনুযায়ী Statement Execute করতে থাকে। এই প্রোগ্রামের ক্ষেত্রে `console.log('there')`statement টি Execute হয়।
আর যখন setTimeout ফাংশনটিকে যখন call stack থেকে `Browser API` তে পাঠানো হয় তখন call stack টি খালি থাকার কারণে জাভাস্ক্রিপ্ট `console.log('JSConfEU')` statement টিকে call stack এ পাঠিয়ে execute করে ফেলে যার কারণে ``console.log('JSConfEU')` statement টি console.log('there') এর আগে execute করছে।

জাভাস্ক্রিপ্টে setTimeout ছাড়া আরও কিছু ফাংশন আছে যা asynchronous API রয়েছে। যেমনঃ `addEventListener`, `setTimeout`, `setInterval`, যেকোনো ধরনের API কল।

নিচের Graphical Representation টা দেখলে বিষয়টি আরও পরিষ্কার হবে।

![queue-example-jsconf (1)](https://user-images.githubusercontent.com/9677372/144177972-e998b3cf-7b37-4d52-9feb-f7926ffb9eeb.gif)

এই ছিল আজকের আলোচনা। পরবর্তীতে অন্য কোন বিষয় নিয়ে আবার কথা হবে। হ্যাপি কোডিং।
