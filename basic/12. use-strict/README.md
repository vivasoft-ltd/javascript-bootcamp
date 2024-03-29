প্রায় সব ল্যাংগুয়েজেরই নিজস্ব একটা ডকুমেন্ট আছে। যার মাধ্যমে আমরা ঐ ল্যাংগুয়েজের ভাল কিংবা খারাপ দিক অথবা ভাল প্র্যাকটিস এবং খারাপ প্র্যাকটিস সম্পর্কে জানতে পারি। কিন্তু জাভাস্ক্রিপ্টের এই রকম কোন কিছু নেই। যে কারণে এখানে ভুলটা বেশি হবার সুযোগ থাকে এবং সবাই নিজের মত করে কোড লিখে সে ভুলটা করেও বটে। যেগুলো আসলে ভুল সিনট্যাক্স এবং আনসিকিউর কোড। কিন্তু আমরা যখন স্ট্রিক্ট মোড  ব্যবহার করি, তখন জাভাস্ক্রিপ্ট কোড কোন ভুল সিনট্যাক্স ছাড়া এক্সিকিউট করে এবং কোড আরও সিকিউর করে।

### “use strict” ডিরেক্টিভঃ-
**“use strict”** মোডে আমাদের কোড এক্সিকিউট করতে হলে আমাদেরকে **“use strict”** ডিরেক্টিভ ব্যবহার করতে হবে। এটি একটি এক্সপ্রেশন মাত্র। এটি জাভাস্ক্রিপ্টের ১.৮.৫ (ইএস৫) থেকে সাপোর্ট করে।

### “use strict” এর ব্যবহারঃ-
**“use strict”** ডিরেক্টিভকে আমরা দুইভাবে ব্যবহার করতে পারি। গ্লোবাল ডিক্লারেশন হিসাবে এবং ফাংশন ডিক্লারেশন হিসাবে।

### গ্লোবাল ডিক্লারেশনঃ-
যখন আমরা গ্লোবাল ডিক্লারেশন হিসাবে **“use strict”** ব্যবহার করি, তখন ঐ পেজের সমস্ত জাভাস্ক্রিপ্ট কোড স্ট্রিক্ট মোডে এক্সিকিউট হয়।

```js
"use strict";

console.log("Hello JavaScript");
```

### ফাংশন ডিক্লারেশনঃ-
যখন আমরা ফাংশন ডিক্লারেশন হিসাবে **“use strict”** ব্যবহার করি, তখন ফাংশনের ভিতরের সমস্ত জাভাস্ক্রিপ্ট কোড স্ট্রিক্ট মোডে এক্সিকিউট হয়। ফাংশনের বাহিরে সব কোড নর্মাল মোডে এক্সিকিউট হয়।

```js
(function() {
    "use strict";

    console.log("Hello JavaScript");
})();
```

##### উদাহরন – ১ঃ
আপনি জাভাস্ক্রিপ্টে ভেরিয়েবল কি-ওয়ার্ড ডিক্লেয়ার না করেও কাজ করতে পারবেন। কারণ আমরা জানি জাভাস্ক্রিপ্টে ভেরিয়েবলের নামের আগে ভেরিয়েবল কি-ওয়ার্ড ব্যবহার না করলে এটি বাই-ডিফল্ট উইন্ডো অবজেক্টের আন্ডারে এক্সিকিউট হয়।

```js
num = 10;

console.log(num); // 10
```

একই কোড যখন আমরা **“use strict”** ব্যবহার করে এক্সিকিউট করবো, আমরা একটা Uncaught ReferenceError: num is not defined পাবো।

```js
"use strict";

num  = 10;

console.log(num); // Uncaught ReferenceError: num is not defined
```

#### উদাহরন-২ঃ

জাভাস্ক্রিপ্টে আমরা রিজার্ভড কি-ওয়ার্ডগুলো ব্যবহার করতে পারি ভেরিয়েবলের নাম হিসাবে।

```js
var let = 10;

console.log(let); // 10
```

কিন্তু **“use strict”** মোডে এটি সম্ভব নয়। কারণ এটি ইএস৬ এর জন্যে একটি রিজার্ভড কি-ওয়ার্ড।

```js
"use strict";
var let = 10;

console.log(let); // Uncaught SyntaxError: Unexpected strict mode reserved word
```

### কিছু রিজার্ভড কি-ওয়ার্ডঃ

- abstract
- instanceof
- super
- static
- package
- const
- implements
- with
- private
- protected

#### উদাহরন – ৩ঃ
ফাংশনের ভিতরে **“this”** এর ভ্যালু সব সময় উইন্ডো অবজেক্ট হয়।

```js
function showMe() {
    console.log(this);
}

showMe(); /// window
```
কিন্তু **“use strict”** মোডে ফাংশনের ভিতরে **“this”** এর ভ্যালু **undefined** হবে।

```js
"use strict";

function showMe() {
    console.log(this); // undefined
}

showMe(); /// window
```

এই রকম আরও অনেক ব্যবহারের ক্ষেত্র আছে যেটি আপনারা একটু কষ্ট করে নিজ দায়িত্বে দেখে নিবেন। যাইহোক, যেহেতু জাভাস্ক্রিপ্টের জন্যে নির্দিষ্ট কোন ডকুমেন্টস নেই, তাই **“use strict”** ব্যবহার করলে আমরা আমাদের কোডের ডিবাগ করতে সুবিধা হবে। কারণ যদি আমরা কোন ভুল সিনট্যাক্স ব্যবহার করি, জাভাস্ক্রিপ্ট আমাদেরকে ইরর থ্রো করবে। যেটি জাভাস্ক্রিপ্ট সাধরণত করে না। আশা করি, ব্যাপারটা সবাই বুঝতে পারছেন। আর পারবেনই বা কেন? সিম্পল হিসাব, জাভাস্ক্রিপ্ট জিন্দাবাদ। 😛