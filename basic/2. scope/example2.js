/*
Block scope:
জাভাস্ক্রিপ্টে ব্যাপ্তি কোডের বর্তমান প্রেক্ষাপট বোঝায়, যা জাভাস্ক্রিপ্টে ভেরিয়েবলের অ্যাক্সেসযোগ্যতা নির্ধারণ করে। Scope দুটি ধরণের local এবং global:
 * global ভেরিয়েবল হচ্ছে ব্লকের বাইরে ঘোষিত
 * local ভেরিয়েবল হচ্ছে ব্লকের ভিতরে ঘোষিত

নীচের উদাহরণে, আমরা একটি global variable animal তৈরি করব। ব্লকের মধ্যে animal নামের একই একটি local variable। কনসোলে তাদের পাঠানোর মাধ্যমে, আমরা দেখতে পাচ্ছি যে কিভাবে ভেরিয়েবলের মান scopeর উপর নির্ভর করে এবং মূল মান পরিবর্তন করা হয় না।
*/

var isInZoo = true;

// A global variable initialization
let animal = "Tiger";

if (isInZoo) {
  // A block-scoped variable initialization
  let animal = "Cangaroo";
  console.log(`Animal is currently a ${animal}.`);
}

console.log(`Animal is currently a ${animal}.`);
/*
Output:

Animal is currently a Cangaroo.
Animal is currently a Tiger.
*/