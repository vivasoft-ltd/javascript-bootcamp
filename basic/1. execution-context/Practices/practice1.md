
নিচের কোড দেখুন। ভেরিয়েবল a এর মান check() ফাংশনের মধ্যে পরিবর্তন করা কি সম্ভব? check() ফাংশনের বাইরে ভেরিয়েবল b কে একসেস করা কি সম্ভব? এক্সিকিউশন কন্টেক্সট এর উপর ভিত্তি করে হ্যাঁ অথবা না উভয় ক্ষেত্রে আপনার যুক্তি ব্যাখ্যা করুন।

```javascript

let a = 12;

function check() {
  let b = 23;
  a = 44; // Will it change the value of the variable a?
}

console.log(a);
check();
console.log(a);
b = 55; // Is it possible?

```


একটি প্রোগ্রামে কয়টি গ্লোবাল এক্সিকিউশন কন্টেক্সট ও কয়টি ফাংশনাল এক্সিকিউশন কন্টেক্সট থাকতে পারে? নীচের প্রোগ্রামটি রান করলে কয়টি গ্লোবাল ও ফাংশনাল এক্সিকিউশন কন্টেক্সট তৈরী করবে?

```javascript

function a() {
    console.log('Function a() executed');

    function b() {
        console.log('Function b() executed');
    }

    function c() {
        console.log('Function c() executed');

        function cc() {
            console.log('Function cc() executed');
        }
    }
}

function d() {
    console.log('Function d() executed');

    function e() {
        console.log('Function e() executed');

        function ee() {
            console.log('Function ee() executed');
        }
    }

    e();
}

a();
d();

```