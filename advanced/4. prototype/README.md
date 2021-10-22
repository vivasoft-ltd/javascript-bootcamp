### Prototype

আজকের আলোচনার বিষয় হচ্ছে জাভাস্ক্রিপ্টের Prototype. গত আলোচনাতে আমারা জাভাস্ক্রিপ্টের Factory pattern নিয়ে আলোচনা করেছি। জাভাস্ক্রিপ্ট প্রোগ্রামার বা ডেভেলপার হিসাবে Prototype সম্পর্কে পরিষ্কার ধারণা থাকা অতীব জরুরী। তাই চেষ্টা করবো আজকে কিছু ইউজফুল উদারণ দিয়ে Prototype নিয়ে একটু লেখতে। আশা করি, আজকের পর থেকে Prototype নিয়ে কাজ করতে কখনো সমস্যা হবে না। চলুন শুরু করা যাক।

নিচের Constructor Function টা লক্ষ্য করুন।

```js

function Car(color, name, manufactureDate) {
  this.color = color;
  this.name = name;
  this.manufactureDate = manufactureDate;

  this.getColor = function () {
    return this.color;
  };
  this.getName = function (){
      return this.name;
  }
  this.getManufactureDate = function(){
      return this.manufactureDate;
  }
}

```
চলুন আমরা ```firstCar``` এবং ```secondCar``` নামে দুইটি Object তৈরি করি ```Car``` Constructor Function ব্যবহার করে।

```js

const firstCar = new Car("red", "Ferrari", "2020");
const secondCar = new Car("yellow", "Lamborgini", "2021");

```
আশা করি এই পর্যন্ত বোঝতে কোন সমস্যা হয় নি। যদি কোন সমস্যা হয়ে থাকে তবে আমাদের Constructor Function এর আলোচনাটি দেখার জন্য অনুরোধ করছি। 

উপরের কোডটি লক্ষ্য করলে দেখা যাবে যে, জাভাস্ক্রিপ্ট ইঞ্জিন আমাদের Constructor Function ```Car``` এর দুইটি কপি তৈরি করেছে। একটি ```firstCar``` আর অন্যটি ```secondCar``` এর জন্য। এখন আমরা Constructor Function ```Car``` দিয়ে যত Object তৈরি করব Constructor Function ```Car``` এর  ঠিক তত গুলা কপি তৈরি হবে। একবার ভাবুন তো, প্রত্যেকটি Object এর জন্য একটা ফাংশনের আলাদা আলাদা  Instance তৈরি করা মেমোরি অপচয় ছাড়া আর কিছুই নয়। এই সমস্যা আমার খুব সহজে জাভাস্ক্রিপ্টের  ```Prototype  ``` এর মাধ্যমে সমাধান করতে পারি।


চলুন ```Prototype  ``` নিয়ে আলোচনা শুরু করা যাক।
যখন জাভাস্ক্রিপ্টে একটি Object তৈরি করা হয় ঠিক তখনই জাভাস্ক্রিপ্ট ইঞ্জিন ওই Object এ ```Prototype ``` নামে একটা Property যোগ করে। মূলত, জাভাস্ক্রিপ্টে যেকোনো Object Type এর মধ্যে ```Prototype``` Property আছে। Array Type এর মধ্যে একটা ```Prototype ``` Property আছে। Date Type এর মধ্যে ```Prototype  ``` Property আছে। এমনকি আমরা যদি কোন Custom Object Type তৈরি করি তবে তার মধ্যেও ```Prototype ``` Property আছে। আমরা জানি যে, জাভাস্ক্রিপ্টে ফাংশনও এক ধরনের Object. তাই ফাংশনেরও একটি ```Prototype``` Property আছে। কোন Object এর ```Prototype ``` Property টি ব্যবহার করতে হয় ``` functionName.prototype ``` দিয়ে। 

এখন চলুন আমরা একটি নাম্বারের Array বানাই যেখানে কিছু সংখ্যা থাকবে। যেমনঃ 
```js

const arr = [1, 2,3,4,5];
console.log(arr);

```
উপরের কোডটি রান করালে দেখব যে, ```arr``` এর প্রতিটি ইনডেক্সের মান ব্রাউজারে প্রিন্ট করছে। কিন্তু এর নিচে দেখব, ```__proto__``` নামে একটা Object আছে। এই Object টিকে যদি Expand করি তবে দেখব যে, এইখানে ```push```, ```concat```, ```indexOf``` এমন অনেক পরিচিত মেথড বা ফাংশন রয়েছে যা আমরা প্রায়ই Array Manipulation এর কাজ এ ব্যবহার করে থাকি।  আমার যদি আরও কোন Array বানাই এবং ওই Array এর ```__proto__``` property টি দেখি তবে দেখব যে আগের মত অনেক পরিচিত মেথড বা ফাংশন এখানেও রয়েছে। কিন্তু এই মেথড বা ফাংশন গুলো কোথা থেকে এলো। আমরা তো কোথাও এইগুলা Define বা Declare করি নি।

একই constructor Function ব্যবহার করে তৈরি হওয়া সমস্ত Object একই Prototype Object টিকে Share করে। সুতরাং, Array Constructor  Function ব্যবহার করে তৈরি করা সব Array তাই একই Prototype Object কে Share করবে। তাই যখনই আমরা একটা Array Declare করি ঠিক তখনই Array এর জন্য নির্ধারিত Prototype Object টি Array এর ভিতর Assign হয়ে যায়। আর Array এর জন্য নির্ধারিত Prototype Object টির ভিতর ```push```, ```concat```, ```indexOf``` এর মত অনেক পরিচিত মেথড বা ফাংশন আগে থেকে লিখা আছে। তাই আমরা যত খুশি Array Type ভেরিয়েবল Declare করি না কেন, সব কয়টার ```__proto__``` ভিতর পূর্ব নির্ধারিত মেথড বা ফাংশন গুলো থাকবে।


এখন তাহলে চলুন আমরা আমাদের ```Car``` Constructor Function এর  মধ্যে থাকা ```getColor```, ```getName```, ```getManufactureDate``` মেথডগুলোকে সরিয়ে ```Car``` Constructor Function এর Prototype এর মধ্যে ঢোকাই; যাতে করে ```Car``` Constructor Function দিয়ে তৈরি সব Object এর মধ্যে মেথডগুলোকে automatically চলে আসে।

```js

function Car(color, name, manufactureDate) {
  this.color = color;
  this.name = name;
  this.manufactureDate = manufactureDate;
}

Car.prototype.getColor = function () {
  return this.color;
};
Car.prototype.getName = function () {
  return this.name;
};
Car.prototype.getManufactureDate = function () {
  return this.manufactureDate;
};

const firstCar = new Car("red", "Ferrari", "2020");
console.log(firstCar);

const secondCar = new Car("Yellow", "Lamborgini", "2021");
console.log(secondCar);

```

উপরের কোডটি যদি আমরা ব্রাউজার এ গিয়ে Output দেখি তবে দেখব যে, আমাদের ```Car``` Constructor Function এর ভিতর এখন আর মেথডগুলো নেই। মেথডগুলো এখন ```__proto__``` এর ভিতর চলে গিয়েছে যা ```Car``` Constructor Function থেকে তৈরি সব Object ই automatically পেয়ে যাবে। প্রতিটি Object Instance এর ভিতর থাকলে যে মেমোরি অপচয় হওয়ার কথা ছিল টা এখন আর হচ্ছে না।

এই ছিল আজকের জাভাস্ক্রিপ্টের Prototype নিয়ে যত কথা। 

হ্যাপি কোডিং।
