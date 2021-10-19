### Garbage Collector

আজকে আমাদের আলোচনার বিষয় হল জাভাস্ক্রিপ্টের Grabage Collector. আমরা জানি Grabage কি? Grabage মূলত এমন জিনিসগুলিকে বোঝায় যা আর ব্যবহারযোগ্য নয়। যখন প্রোগ্রামিংয়ের কথা আসে, Grabage Colllector মানে মেমরি স্পেসগুলি পরিষ্কার করা যাতে দরকারী ডেটা থাকে না এবং তারপর সেই ক্লিয়ার করা মেমোরিকে অন্য কিছু ডেটাতে পুনরায় বরাদ্দ বা Allocate করা হয়। সব প্রোগ্রামিং ভাষায় এটিই Garbage Collector এর প্রাথমিক প্রক্রিয়া। কিছু কিছু প্রোগ্রামিং ল্যাঙ্গুয়েজে Garbage Collector এর জন্য ডেভেলপারের স্পষ্ট হস্তক্ষেপের বা Explicit interference  প্রয়োজন হয় আবার অন্য কিছু ল্যাঙ্গুয়েজ Automatically এটি করে থাকে। Low লেভেল প্রোগ্রামিং ল্যাঙ্গুয়েজ যেমন C তে, ডেভেলপারকে malloc () এবং free () এর মত পদ্ধতি ব্যবহার করে মেমরি ক্লিয়ার করার প্রয়োজন হয়। 
জাভাস্ক্রিপ্টের মত একটি High level প্রোগ্রামিং ল্যাঙ্গুয়েজে, মেমরি Management প্রক্রিয়া স্বয়ংক্রিয়। ব্রাউজার আমাদের জন্য এই কাজটি করে দেয়।

এই আলোচনাতে আমারা Grabage Collector এর কয়েকটি বিষয় নিয়ে আলোচনা করব।

১) মেমোরি ম্যানেজমেন্ট Life Cylce.
2) Garbage Collection এলগরিদম।
৩) মেমোরি Leak

### মেমোরি ম্যানেজমেন্ট Life Cylce :

চলুন আমরা প্রথমে মেমোরি ম্যানেজমেন্টে Life Cylce এর সাধারন ধাপগুলো দেখি।

১) প্রথম ধাপে আমরা যখন একটি Variable, ফাংশন বা Object declare করি ঠিক তখনই এটির জন্য একটি মেমরি Space বরাদ্দ করা হয়।
২) পরের ধাপে, বরাদ্দকৃত মেমরি রিড/রাইট অপারেশন দ্বারা ব্যবহৃত হয়।
৩) শেষের ধাপে, যখন মেমরির আর প্রয়োজন হয় না, তখন মেমরির জন্য বরাদ্দকৃত স্থানটি ছেড়ে দেয়া হয়।

শেষের ধাপটিকে আমরা Garbage Collection বলতে পারি। জাভাস্ক্রিপ্টে এই কাজটি Automatically বা স্বয়ংক্রিয়ভাবে হয়ে থাকে। Garbage Collection যে বা যার মাধ্যমে এই কাজটি করে থাকে তাই হল Garbage Collector. Garbage Collector এর মূল উদ্দেশ্য হল, মেমোরি  Allocation কে মনিটর করা এবং মেমরির আর প্রয়োজন আছে কিনা তা নির্ধারণ করা আর যদি মেমোরির প্রয়োজন না হয় তবে এটিকে পুনরুদ্ধার করা।


### Garbage Collection এলগরিদম

জাভাস্ক্রিপ্টে Garbage Collection প্রক্রিয়াটি দুটি অ্যালগরিদম দ্বারা পরিচালিত হয় যা নীচে তালিকাভুক্ত করা হয়েছে।
১) Reference Counting Algorithm
২) Mark and Sweep Algorithm

আসুন এই অ্যালগরিদমগুলোকে বোঝার চেষ্টা করি।

### Reference Counting Algorithm:

প্রথমে রেফারেন্স কি তা বোঝার চেষ্টা করি। একটি Object অন্য একটি Object কে রেফারেন্স করছে এটির মানে হল, প্রথম Object টি দ্বিতীয় Object এর মেথড বা প্রপার্টিগুলোকে অ্যাক্সেস করতে পারছে। চলুন এখন সরাসরি অ্যালগরিদমে যাওয়া যাক।

Reference Counting অ্যালগরিদমের মূল বিষয়টি খুবই সিম্পল। এইটি লক্ষ্য করে যে একটি Object অন্য কোন Object কে রেফারেন্স করছে কিনা। যদি না করে তবে Object টিকে Garbage হিসেবে চিহ্নিত করে । একটি উদাহরন দেখা যাক।

```js

var obj = { // first object created 
 property1: { // second object created
 property2 : 10
 }
}

```

উপরের কোডটি লক্ষ্য করে দেখুন, দুইটি Object তৈরি হয়েছে একটি হল ```obj``` আর অন্যটি হল ```property1``` এবং একটি Object এর প্রপার্টি হিসেবে অন্য Object কাজ করছে। সুতরাং ```Obj``` Object টি দ্বিতীয় Object টিকে রেফারেন্স করছে তাই এখানে Garbage Collection এর কোন সুযোগ নেই।

```js

var newObj = obj; // Now we have another to the existing objects.
obj = 10; // Still the objects are referenced by the newObj variable. So there is no chance of Garbage Collection

```

চলুন আরেকটি Implementation দেখি।

```js
var anotherObj = newObj.property1;

```
একটু লক্ষ্য করে দেখুন, এখন ```property1``` এর দুইটি Reference রয়েছে। একটি হল ```newObj``` variable এর আর অন্য Reference টি হল ```anotherObj``` variable এর। যেহেতু Reference আছে তাই Garbage Collection এর কোন সুযোগ নেই এখানে।

```js
newObj = ‘Some string’;
```
এখন ```newObj``` এর কোন Reference নেই। কিন্তু ```property1``` এখনও ```anotherObj``` variable কে Reference করছে। এখানেও তাই Garbage Collection এর কোন সুযোগ নেই।

```js
anotherObj = null;
```
এখন ```anotherObj``` variable ও ```property1``` এর কোন Reference নেই। এক্ষেত্রে Object টি Garbage হিসেবে Consider হবে।

```js

function foo() {
   var obj1 = {};
   var obj2 = {}; 
   obj1.a = obj2; 
   obj2.a = obj1;
   console.log(obj1);
   console.log(obj2);
}
foo();

```

উপরের কোডটি লক্ষ্য করুন, এখানে Circular Reference হচ্ছে। একটি Object অন্য একটি Object কে Reference করছে। এক্ষেত্রে, Reference Counting Algorithm কাজ করতে পারে না। এজন্য আমদের পরবর্তী অ্যালগরিদম Mark and Sweep Algorithm এর সাহায্য নিতে হবে। তাহলে চলুন Mark and Sweep Algorithm নিয়ে আলোচনা শুরু করা যাক।

### Mark and Sweep Algorithm:

এই অ্যালগরিদমটি একটু ভিন্নভাবে কাজ করে। এই অ্যালগরিদমটি Object এর কাছে পৌঁছাতে পারছে কিনা তার উপর নির্ভর করে Garbage Collection করে। একটু জটিল মনে হতে পারে কিন্তু ভয় পাওয়ার কিছু নেই। জাভাস্ক্রিপ্ট প্রথমে Root Object কে (Window Object ) চিহ্নিত করে এরপর এটি অন্য Child Object এর ট্রাভেরস করে তারপর Child Object এর Chilern কে ট্রাভেরস করে। এভাবে যদি কোন Object এ পৌঁছানো না যায় তবে জাভাস্ক্রিপ্ট এটিকে Garbage হিসেবে চিহ্নিত করে এবং Object এর জন্য বরাদ্দকৃত মেমোরি খালি করে ফেলে। এভাবে এই অ্যালগরিদমটি অনেক Efficiently Circular Reference এর সমস্যাটি যা আমরা Reference Counting অ্যালগরিদমে দেখেছিলাম তার সমাধান করতে পারে।


### মেমোরি Leak:

একজন ডেভেলপার তার প্রোজেক্ট এ মেমোরি Leak প্রতিরোধ করার জন্য অনেক কিছুই করে থাকেন। তারপরও মেমোরি Leak এর কিছু সাধারন কারণ সম্পর্কে জেনে থাকা ভাল। কিছু সাধারন কারণ নিয়ে নিচে আলোচনা করা হল।

১) Globals এর অতিরিক্ত ব্যবহার। হউক সেটা অতিরিক্ত গ্লোবাল Variable ব্যবহারের জন্য বা লোকাল Scope এ ```var``` keyword এর ব্যবহার না করার জন্য।
২) Timer গুলোকে ক্লিয়ার করতে ভুলে গেলে। উদাহরনস্বরূপ: ```setInterval()```.
৩) ```closure``` এর অপ্রয়োজনীয় ব্যবহার এর জন্য।

আমরা কাজ করার সময় অবশই এই বিষয়গুলো সতর্ক থাকব যাতে পরবর্তীতে মেমোরি Leak না হয়।

এই ছিল Garabage Collector নিয়ে কিছু কথা। পরবর্তীতে অন্য কোন বিষয় নিয়ে আবার কথা হবে।

হ্যাপি কোডিং।

