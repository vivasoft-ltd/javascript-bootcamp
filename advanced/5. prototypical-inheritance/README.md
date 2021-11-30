### Prototypical Inheritance

আজকের আলোচনার বিষয় হচ্ছে জাভাস্ক্রিপ্টের Prototypical Inheritance. গত আলোচনাতে আমারা জাভাস্ক্রিপ্টের Prototype pattern নিয়ে আলোচনা করেছি। জাভাস্ক্রিপ্ট প্রোগ্রামার বা ডেভেলপার হিসাবে Prototypical Inheritance সম্পর্কে পরিষ্কার ধারণা থাকা খুবই জরুরী। তাই চেষ্টা করবো আজকে কিছু উদাহরণ দিয়ে Prototypical Inheritance নিয়ে একটু লেখতে। চলুন শুরু করা যাক।

### Prototypical Inheritance কি?

সহজভাবে বলতে গেলে Prototypical Inheritance বলতে একটি Object যখন অন্য একটি Object এর প্রপার্টিকে অ্যাক্সেস করতে পারে তাকেই বুঝায়। আমরা জানি যে, জাভাস্ক্রিপ্টের Prototype এর মধ্যে যে কোন Object এ নতুন প্রপার্টি বা মেথড যোগ করা যায়; আমারা তখন আমাদের জাভাস্ক্রিপ্ট কোডে Prototype থেকে এই প্রপার্টিগুলো Inherite করার জন্য বলে দিতে পারি। একটি Object অন্য Object এর প্রপার্টি বা মেথডগুলোকে পুনরায় ব্যবহার করতে Prototypical Inheritance সাহায্য করে।

সকল জাভাস্ক্রিপ্ট Object ই কোন না কোন প্রপার্টি বা মেথড prototype থেকে Inherit করে থাকে। উদাহরণস্বরূপ,
১। Date Object, Date.prototype থেকে Inherit করে থাকে।
২। Array Object, Array.prototype theke Inherit করে থাকে।
আর এই Prototype chain এর সবার উপর থাকে Object.prototype. Date Object, Array Object সবাই Object.prototype কে Inherite করে।

চলুন, এখন সরাসরি Prototypical Inheritance বুঝার চেষ্টা করি কিছু practical উদাহরন এর মাধ্যমে।

আসুন, একটি `Rectangle constructor` তৈরি করা যাক।

```js
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
```

এখন যদি আমারা `Rectangle constructor` দিয়ে একটা Object তৈরি করতে চাই তবে কি করে করব। নিশ্চয়ই মনে আছে।

```js
let rect = new Rectangle(3, 4);
rect.width; // Now the width of Rectangle is 3
rect.height; // And the height of that rectangle is 4
```

এখন আমরা এই `Rectangle constructor` এর মধ্যে একটা মেথড তৈরি করব। মেথডটির নাম `area` দেয়া যেতে পারে।

```js
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
```

এখন আমরা ইচ্ছে করলেই `Rectangle` Object এর `area` মেথডটি ব্যবহার করতে পারি।

```js
var rect = new Rectangle(3, 4);
rect.area(); // 12
```

আশা করি এই পর্যন্ত বুঝতে আমাদের কোন সমস্যা হয়ে নি। চলুন আমরা `square constructor` এর মাধ্যমে একটি Object তৈরি করি।

```js
function Square(length) {
  this.width = this.height = length;
}
```

আমরা সবাই জানি যে, Square আসলে একটা বিশেষ ধরনের Rectangle। তাহলে Rectangle এর বৈশিষ্ট্যগুলোও Square এর মধ্যে থাকা উচিত। কিন্তু কি করে এই কাজটি করব?
যদি আমাদের মনে থেকে থাকে তবে আমরা জানি যে, `Object.create()` দিয়ে আমারা একটি খালি বা Empty Object তৈরি করতে পারি। তাহলে একটা কাজ করলে কেমন হয়, Square এর prototype এর একটা Object তৈরি করি Reactangle এর prototype কে প্যারেন্ট ধরে।

```js
Square.prototype = Object.create(Rectangle.prototype);
```

এখন Square এর prototype এর মধ্যে Rectangle.prototype এর বৈশিষ্ট্যগুলো চলে এসেছে। সুতরাং, Square এর সকল Instance এর Prototype এর মধ্যেও এই বৈশিষ্ট্যগুলো থাকবে। তাহলে চলুন দেখি সবকিছু ঠিকঠাক কাজ করছে কি না।

```js
var square = new Square(4);
square.area(); // 16
```

উপরের কোডটি যদি একটু লক্ষ্য করে দেখুন তবে থেখা যাবে যে, আমরা `square` নামে যে Object টি তৈরি করেছি তার মধ্যে `area` মেথডটি চলে এসেছে। এটাই আসলে Prototypical Inheritance।
এখন আমরা যদি চাই, তবে square এর মধ্যে শুধুমাত্র তার নিজের কিছু মেথড বা প্রপার্টি যোগ করতে পারি। চলুন তাহলে করা যাক,

```js
Square.prototype.diagonal = function () {
  return Math.sqrt(this.area() * 2);
};
```

শেষ করার আগে একটা বিষয় মাথায় রাখা জরুরী, তা হল একটি Object কখনও একাধিক Prototypes Inherit করতে পারে না।
তাহলে এই ছিল আজকের আলোচনা। আশা করি Prototypical Inheritance বুঝতে আর কোন সমস্যা হবে না। পরবর্তীতে অন্য কোন বিষয় নিয়ে আবার আলোচনা হবে।

হ্যাপি কোডিং।
