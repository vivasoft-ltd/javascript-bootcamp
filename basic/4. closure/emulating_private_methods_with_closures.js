// জাভার মতো ভাষাগুলি আপনাকে method private হিসাবে declare করার অনুমতি দেয়,
// অর্থাত্ তাদের একই class এর অন্যান্য methods দ্বারা call করা যেতে পারে।
// জাভাস্ক্রিপ্ট এটি করার একটি native way প্রদান করে না,
// কিন্তু Closure ব্যবহার করে private method অনুকরণ করা সম্ভব।
// private method গুলি কেবল কোডে অ্যাক্সেস সীমাবদ্ধ করার জন্য কার্যকর নয়।
// তারা আপনার global namespace পরিচালনার একটি শক্তিশালী উপায়ও প্রদান করে।

var counter = (function () {
  var privateCounter = 0;
  function changeByValue(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeByValue(1);
    },

    decrement: function () {
      changeByValue(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

// Initial call privateCounter
console.log(counter.value());

// privateCounter increment by 1
counter.increment();
// again privateCounter increment by 1
counter.increment();
console.log(counter.value());

// privateCounter decrement by 1
counter.decrement();
console.log(counter.value());


/*
Output:
0
2
1
*/