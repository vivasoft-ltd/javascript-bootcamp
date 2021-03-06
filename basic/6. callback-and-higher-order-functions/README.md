কলব্যাক ব্যাপারটি আমাদের জীবনের সাথে ব্যাপকভাবে জড়িয়ে আছে। যদি “সে” কলব্যাক না করে আপনি হয়তো “অ” হয়ে যান! ইয়ে মানে বলতে চাচ্ছিলাম যে অভিমানী নয়তো অস্থির হয়ে যান ;) আর যদি আপনার লাইফে “সে” না থাকে তবে তো কোন কথাই নেই। আমার মত বিন্দাস? । যাইহোক, আপনি “অ” হোন আর না হোন, “সে” কলব্যাক করুক আর না করুক আজকে আমরা কলব্যাক নিয়ে আলোচনা করবোই। চলুন তাহলে শুরু থেকেই শুরু করি…

জাভাস্ক্রিপ্টে ফাংশন হচ্ছে একটি ফার্স্ট-ক্লাস অবজেক্ট। এই কারণে, ফাংশন ভেরিয়েবলের মাঝে এসাইন হতে পারে, অন্য একটি ফাংশনকে আর্গুমেন্ট হিসাবে নিতে পারে, ফাংশনের ভিতরেও কাজ করতে পারে এবং ফাংশন দ্বারা রিটার্নও হতে পারে।

### কলব্যাক ফাংশন কি?
> সহজ কথায়, কলব্যাক ফাংশন হচ্ছে এমন একটি ফাংশন যেটি অন্য একটি ফাংশনে আর্গুমেন্ট হিসাবে পাস করা ফাংশন, যেটি কোন কাজ সম্পন্ন করার জন্যে আউটার ফাংশনের ভিতরে ইনভোক হয়।

### হাইয়ার অর্ডার ফাংশন কি?
> যে ফাংশনে অন্য কোন ফাংশনকে আর্গুমেন্ট হিসাবে পাস করা হয় বা কোন ফাংশন অন্য কোন ফাংশনকে রিটার্ন করে তাকে হাইয়ার অর্ডার ফাংশন বলা হয়। বাংলায় এটাকে ঊচ্চমার্গীয় ফাংশন হিসেবে ভেবে নিতে পারেন। ঊচ্চমার্গীয় কথাবার্তা মাথার উপর দিয়ে গেলেও ঊচ্চমার্গীয় ফাংশন মাথার নিচ দিয়েই যাবে ইনশাআল্লাহ্‌, নিশ্চিত থাকুন।

আমাদের এমন একটি ফাংশন আছে যেটি আর্গুমেন্ট হিসেবে একটি অ্যারে নিবে এবং সেটি কে মডিফাই করে একটি নতুন অ্যারে রিটার্ন করবে। এক্ষেত্রে, আমাদের ফাংশনটিকে যে অ্যারে দেওয়া হবে তার সাথে দুই যোগ করে নতুন একটি অ্যারে রিটার্ন করবে।

```js
function modifyBy2(arr) {
	let output = [];
	
	for(let i = 0; i < arr.length; i++) {
		output.push(arr[i] + 2);
	}
	
	return output;
}

const newArr = modifyBy2([1,2,3,4,5,6]);
console.log(newArr); // [3, 4, 5, 6, 7, 8]
```

এখন আমাদের আরেকটি ফাংশন আছে যেটি আর্গুমেন্ট হিসেবে একটি অ্যারে নিবে এবং যে অ্যারে দেওয়া হবে তার সাথে দুই গুণ করে নতুন একটি অ্যারে রিটার্ন করবে।

```js
function multifyBy2(arr) {
	let output = [];
	
	for(let i = 0; i < arr.length; i++) {
		output.push(arr[i] * 2);
	}
	
	return output;
}

const newArr = modifyBy2([1,2,3,4,5,6]);
console.log(newArr); // [2, 4, 6, 8, 10, 12]
```

এখন যদি আমরা বিয়োগ বা ভাগ করতে চাই? তাহলে আমাদেরকে আরও দুটি ফাংশন লিখতে হবে তাই না? ব্যাপারটা তাহলে কি ভাল কিছু হচ্ছে? কোড রিপিটেশন হয়ে যাচ্ছে। একটি বিষয় লক্ষ্য করেন আমাদের লেখা দুটি ফাংশনেই শুধু অপারেশনগুলা ছাড়া একই কোড লিখেছি। আমরা যদি এমন কিছু করতে পারি যে আমাদের ফাংশনে যোগ, বিয়োগ যে কাজই করুক না কেন সেটি আমরা বলে দিবো, তাহলে কেমন হয়? এখন আমরা সে কাজটাই করবো। তার জন্যে আমাদেরকে আমাদের ফাংশনের সাথে আরেকটি আর্গুমেন্ট পাস করতে হবে। যেটি আসলে আমাদের অপারেশনটা হ্যান্ডেল করবে।

```js
function modifyArray(arr, fn) {
	let output = [];
	
	for(let i = 0; i < arr.length; i++) {
		output.push(fn(arr[i]));
	}
	
	return output;
}

function modifyBy2(elem) {
	return elem + 2;
}


const newArr = modifyArray([1,2,3,4,5,6], modifyBy2);
console.log(newArr); // [3, 4, 5, 6, 7, 8]
```
উপরের কোডে লক্ষ্য করুন, আমরা **modifyArray** নামে একটি ফাংশন ডিফাইন করেছি যেটি দুটি আর্গুমেন্টস নিচ্ছে। একটি অ্যারে এবং অন্যটি একটি ফাংশন। সে ফাংশনে আমরা বলে দিচ্ছি তার কাজ কি হবে। সে তার কাজ সম্পন্ন করে output অ্যারেতে তার ভ্যালুটা পুশ করে দিচ্ছে এবং modifyArray ফাংশনটি কাজ সম্পন্ন করে একটি নতুন অ্যারে রিটার্ন করতেছে। এখন যদি আমরা বিয়োগ, গুণ বা ভাগ করতে চাই সেটিও খুব সহজেই করতে পারবো এই ফাংশন দিয়ে। আমাদেরকে নতুন করে কোন লজিক লেখা লাগবে না শুধু আমরা একটি নতুন ফাংশন দিয়ে দিবো এবং সেখানে বলে দিবো তাকে কি করতে হবে। তাহলে চলুন দেখি আমাদের কাজ করতে পারি কিনা।

```js
function modifyArray(arr, callback) {
	let output = [];
	
	for(let i = 0; i < arr.length; i++) {
		output.push(callback(arr[i]));
	}
	
	return output;
}

function addBy2(elem) {
	return elem + 2;
}

function multifyBy2(elem) {
	return elem * 2;
}


const additionArr = modifyArray([1,2,3,4,5,6], addBy2);
const multiArr = modifyArray([1,2,3,4,5,6], multifyBy2);

console.log(additionArr); // [3, 4, 5, 6, 7, 8]
console.log(multiArr); // [2, 4, 6, 8, 10, 12]
```

**modifyArray** ফাংশনটিতে আর্গুমেন্ট হিসাবে যে ফাংশনটিকে পাস করতেছি ওই ফাংশনটিই হচ্ছে একটি কলব্যাক ফাংশন এবং **modifyArray** ফাংশনটি হচ্ছে একটি **হাইয়ার অর্ডার ফাংশন**।
