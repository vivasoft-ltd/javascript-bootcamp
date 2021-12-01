### Debouncing and Throttling

আমাদের আজকের আলোচনার বিষয় হল জাভাস্ক্রিপ্টের Debouncing এবং throttling. জাভাস্ক্রিপ্টের কোন Application কে অপ্টিমাইজ করার জন্য বা ব্রাউজার Performance কে আরও উন্নত করার জন্য Debouncing এবং throttling ব্যবহার করা হয়। তাহলে চলুন আলোচনা শুরু করা যাক।

### Debounce ফাংশন কি?

Debounce ফাংশন হল এমন একটি ফাংশন যা কোন ফাংশন কতবার কল হবে তা নিয়ন্ত্রণ করে এবং কিছু নিদিষ্ট সময় অপেক্ষা করার পর পুনরায় ওই ফাংশনটিকে কল করে। চলুন একটা উদাহরন দেখা যাক।

বেশিরভাগ ওয়েবসাইটেই Search Bar থাকে যার মাধ্যমে User কিহু Specific KeyWord দিয়ে সার্চ করে কাঙ্ক্ষিত ফলাফল পেয়ে থাকে। Ecommerce সাইটে User যখন কোন প্রোডাক্টের নাম দিয়ে সার্চ করে তখন ওই টাইপের যত প্রোডাক্ট আছে তা User এর কাছে চলে আসে। সুতরাং এখানে যা হচ্ছে তা হল, User যখন কোন একটা সার্চ Query লিখে তখন সার্চ Query এর প্রত্যেকটা Character এর জন্য API কল হয়। ঊদাহরসরুপ, User যদি "Apple Macbook Pro" লিখে সার্চ করে তবে ১৭ বার API call হবে এই সার্চের ফলাফল দেখানর জন্য। এটা কখনও একটা ভাল Approach হতে পারে না। আমরা এখানে Debounce ব্যবহার করে API call এর পরিমাণ কমিয়ে অনেক Optimization করতে পারি।

চলুন, আমাদের প্রথম debounce ছাড়া আমাদের কোডটা কেমন হবে তা দেখি।

```js
<input className='search-bar' onChange={searchHandler} />
```

আমরা সাধারণত Search Functionality গুলো onChange or onKeyUp event এর মাধ্যমে করে থাকি। এখন আমরা আমারদের `searchHandler` ফাংশনটা লিখে ফেলি।

```js
function searchHandler(...args) {
  /* Here we are capturing the search query entered by customer */
  const { value } = args[0].target;
  /* Make an API call with search query */
  getSearchResults(value);
}
```

আশা করছি এই পর্যন্ত বুঝতে কোন সমস্যা হচ্ছে না। তাহলে চলুন আমরা একটা reusable Dubounce ফাংশন লিখে ফেলি।

```js
const optimisedSearchHandler = debounceFunc(searchHandler, 500);
const debounceFunc = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeOut(timer);
    timer = setTimeOut(() => {
      func.apply(context, args);
    }, delay);
  };
};
```

উপরের কোডটা একটু লক্ষ্য করে দেখুন, যখন আমরা সার্চবার এ কিছু লিখার সাথে সাথে এ API কল করছে না। এটি আমাদের সার্চবার এ কিছু লিখার পর একটা নিদিষ্ট সময় অপেক্ষা করছে যদি এর মধ্যে সার্চবার এ আর নতুন কিছু টাইপ করা না হয় তবেই এটি API কে কল করছে। এতে করে আমাদের API কল এর পরিমাণ অনেকখানি কমে গেল।
তাহলে চলুন, আমরা আমাদের সার্চবারের `onChange` debounce Technique টা ব্যবহার করে ফেলি।

```js
<input className='search-bar' onChange={optimisedSearchHandler} />
```

চলুন, এবার `Throttling` নিয়ে আলোচনা করা যাক।

### Throttling

### Throttling আসলে কি?

Throttling এমন একটি Technique যার মাধ্যমে Event Handler এর অ্যাকশানকে Limited করা যায়। অর্থাৎ একটা Event কল হবার পর সুনিদিষ্ট টাইম এর মধ্যে ওই Event আর কল হবে না। বুঝার সুবিধার জন্য আমরা একটা উদাহরনস্বরূপ শুটিংগেমের কথা চিন্তা করতে পারি। একটি শুটিং গেমে বেশ কয়েক ধরনের অস্র থাকতে পারে। প্রতিটি অস্রেরই একটি Fire এর পর পরবর্তী Fire এর জন্য প্রস্তুত হতে কিছু টাইম লাগে। যেমন ShortGun এর ক্ষেত্রে যে সময় লাগবে MachineGun এর ক্ষেত্রে আরও কম সময় লাগবে। ধরি, shortGun এর জন্য এই সময় 500ms আর MachineGun এর জন্য এই টাইম 100ms. তাই আমাদের এমন একটা লজিক সেট করতে হবে যাতে করে User যে অস্র ব্যবহার করুক না কেন, যদি সে Threshold টাইমের মধ্যে একাধিক বার Fire করে তবে শুধুমাত্র একটা Fireই কাজ করবে। আর Fire গুলো নিদিষ্ট সময়ের পর এক এক করে Fire করবে।

চলুন তাহলে Trigger ক্লিকের একটা Event Handler তৈরি করে ফেলি।

```js
window.addEventListener(onclick, handlerTrigger);
const handlerTrigger = () => {
  fireShot();
};
```

উপরের কোডটি লক্ষ্য করুন, User যখনই Trigger press করছে শট Fire হচ্ছে।
তাহলে চলুন এখন আমরা Throttle ফাংশন লিখে ফেলি যার parameter এ `handlerTrigger` ফাংশন আর Time Interval কে পাঠাব।

```js
const optimisedTriggerHandler = throttleFunc(handlerTrigger, 100);
const throttleFunc = (func, interval) => {
  let shouldFire = true;
  return function () {
    if (shouldFire) {
      func();
      shouldFire = false;
      setTimeOut(() => {
        shouldFire = true;
      }, interval);
    }
  };
};
```

তাহলে চলুন, এখন আমরা আমাদের Event Listener ফাংশনটি আপডেট করে ফেলি।

```js
window.addEventListener(onclick, optimisedTriggerHandler);
```

ঠিক এইভাবে আমরা বিভিন্ন Time Interval সেট করে `optimisedTriggerHandler` কে বিভিন্ন অস্ররের জন্য ব্যবহার করতে পারি।

আমারা এখন পর্যন্ত Debouncing and Throttling দুইটি Techniqueই দেখলাম। এই দুইটি পদ্ধতি concept খুব কাছাকাছি হলে মূল পার্থক্য হল, Debouncing এর ক্ষেত্রে User এর অ্যাকশান কে মনিটর করি এবং Threshold Time এর মধ্যে আবার যদি কোন নতুন অ্যাকশান আসে তবে আবার নতুন করে Threshold Time পর্যন্ত অপেক্ষা করি API কল এর জন্য। অন্যদিকে, Throttling এর ক্ষেত্রে আমরা আমাদের predetermined time interval পর API কল করে দেই।

আশা করি, Debouncing and Throttling বুঝতে আর কোন সমস্যা হবার কথা না। পরবর্তীতে আবার নতুন কোন বিষয় নিয়ে আবার কথা হবে। সে পর্যন্ত হ্যাপি কোডিং।
