### Constructor Pattern

আজকের আলোচনার বিষয় হচ্ছে জাভাস্ক্রিপ্টের Constructor Pattern. গত আলোচনাতে আমারা Object তৈরি করার জন্য Factory pattern নিয়ে আলোচনা করেছি। Factory pattern এর মত Constructor Pattern ও Object তৈরি করে থাকে, তবে দুইটির মধ্যে কিছু পার্থক্য রয়েছে। আজকের আলোচনাতে Constructor Pattern কি এবং Factory pattern এর সাথে এটির পার্থক্য কি তা নিয়ে বিস্তারিত আলোচনা করব। বোঝার সুবিধার জন্য আমরা Factory pattern এ যে উদাহরণ ব্যবহার করেছিলাম সেই উদাহরণ দিয়ে Constructor Pattern কে বোঝার চেষ্টা করব। চলুন শুরু করা যাক।

সহজভাবে বলতে গেলে, Constructor Function এমন একটি ফাংশন যা Object তৈরি করতে পারে। Constructor function ব্যবহার করে Object তৈরি করার প্রক্রিয়াই আসলে Constructor Pattern.

যাহোক Constructor Function এর Naming Convension একটু আলাদা। এখানে আমরা ফাংশনের নামে Pascal Notation ব্যবহার করে থাকি। যদি আমারা Pascal Notation ভুলে গিয়ে থাকি তবে মনে করিয়ে দিচ্ছি। Pascal Notation এ আমরা প্রতিটি শব্দের প্রথম বর্ণটি বড় হাতের অক্ষরে লিখে থাকি। উদাহরণসরূপ, 

```js

function CreateCircle(){}  //// CreateCircle maintain Pascel Notation.
function createCircle(){}  //// createCircle maintain Camel Notation.

```

সুতরাং, জাভাস্ক্রিপ্টের Convenstion অনুযায়ী, আমরা যখন Constructor Function ব্যবহার করব তখন অবশ্যই Pascal Notation ব্যবহার করব, যাতে অন্য জাভাস্ক্রিপ্টের ডেভেলপাররা নাম পড়েই বুঝতে পারে এই Function এর কাজ কি।

যাহোক, এখন আমরা প্রথমে একটি Function বানাবো যার নাম হবে CreateCircle (Pascal Notation).

```js

function CreateCircle(){}  //// CreateCircle maintain Pascel Notation.

```
CreateCircle ফাংশনের কাজ হবে একটা circle Object তৈরি করা যেখানে circle এর radius এবং draw নামে একটা মেথড থাকবে। ঠিক Factory pattern আলোচনার উদাহরণের মত। 

এখানে আমরা Factory pattern মত Object Structure return করার পরিবর্তে একটু ভিন্ন পদ্ধতিতে Object কে Initialize করব জাভাস্ক্রিপ্টের ```this``` KeyWord ব্যবহার করে। জাভাস্ক্রিপ্টের একটা KeyWord আছে ```this```. এখন আমরা মনে করি যে, This একটা খালি বা Empty Object কে Reference করে। This যেহেতু খালি বা Empty Object কে Reference করছে তাই Dot Notation ব্যবহার করে আমরা This নামের খালি বা Empty Object এ Property add করতে পারি। চলুন দেখি তাহলে।

```js

function CreateCircle(radius){
    this.radius = radius;
} 

```

উপরের কোডে আমরা ```this``` নামের খালি বা Empty Object এ আমরা radius নামের একটা Property যোগ করলাম। জাভাস্ক্রিপ্টের Object হল ডাইনামিক, একবার Create করার পর এতে বিভিন্ন property বা মেথড যোগ করা যায়। চলুন আমার draw নামে একটা মেথড যোগ করি যা circle এর radius টা প্রিন্ট করবে।

```js

function CreateCircle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log(`Circle radius is ${this.radius}`);
    };
} 

```

এখন আমরা CreateCircle Constructor Function ব্যবহার করে circle Object তৈরি করব।

```js

function CreateCircle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log(`Circle radius is ${this.radius}`);
    };
}

const circle1 = new CreateCircle(5);

```
উপরের কোডে আমারা একটা নতুন Keyword ব্যবহার করেছি তা হল ```new``` নিশ্চয়ই লক্ষ্য করেছেন। এখন এই ```new``` Keyword নিয়ে কিছু কথা বলা যাক। আমারা যখন এই ```new``` Keyword টা ব্যবহার করি তখন আসলে তিনটি জিনিস ঘটে। প্রথমত, এই ```new``` Keyword একটি খালি বা empty জাভাস্ক্রিপ্ট Object তৈরি করে। অনেকটা  ```const x = {} ``` এইরকম, যা আসলে Background এ কাজ করে বলে আমরা দেখতে পাই না। দ্বিতীয়ত, এইটি ```this``` টিকে সেট করবে খালি বা empty Object টিকে পয়েন্ট করার জন্য যার মধ্যমে আমরা খালি বা empty Object টিতে  property বা মেথড যোগ করব। আর অবশেষে, Object টিকে ফাংশন থেকে return করবে। ```return this```
এই রকম। এই প্রক্রিয়াটিও আসলে Background এ কাজ করে বলে আমরা দেখতে পাই না। 

সুতরাং আমরা এখন CreateCircle Constructor Function কে বিভিন্ন মান বা বিভিন্ন আর্গুমেন্ট দিয়ে কল করে বিভিন্ন circle Object পেতে পারি। চলুন আমরা আরও কিছু circle Object তৈরি করি আমাদের লিখা Constructor Function দিয়ে।

```js

function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`Circle radius is ${this.radius}`);
  };
}

const circle1 = new CreateCircle(5);
console.log(circle1.draw());
const circle2 = new CreateCircle(10);
console.log(circle2.draw());


//
// output:
// Circle radius is 5
// Circle radius is 10
//


```

আমরা এখন Factory Function এবং Constructor Function দুইটি পদ্ধতিতেই Object তৈরি করতে পারি। এখন আমরা দেখব এই দুই পদ্ধতির মধ্যে আসলে পার্থক্য কি?

Factory Function এ আমরা শুধু ফাংশনকে কল করি এবং ফাংশন আমাদের একটা Object রিটার্ন করে আর অন্যদিকে Constructor Function এ আমরা ```new``` keyword ব্যবহার করি এবং Object রিটার্ন না করে ```this``` keyword এর মাধ্যমে খালি বা Empty Object এ প্রপার্টি বা মেথড যোগ করি। এছাড়াও Naming Convension এর ক্ষেত্রে Factory Function এ Camel Notation এবং Constructor Function এ Pascal Notation ব্যবহার করে থাকি।
এখন আমাদের মনে প্রশ্ন আসতে পারে যে, আমরা কোন approach বা pattern টা ব্যবহার করব Object তৈরি করার জন্য। 
যদিও দুইটি approach বা pattern ই সমান কার্যকর কিন্তু যাদের পূর্বে ডেভেলপমেন্টের অভিজ্ঞতা রয়েছে বিশেষ করে C# বা Java Developer তাদের কাছে Constructor pattern টি বেশ পরিচিত, তারা এই pattern এ বেশি Comfort Feel করে। 

এই ছিল Constructor pattern নিয়ে আজকের আলোচনা। 

হ্যাপি কোডিং।

 