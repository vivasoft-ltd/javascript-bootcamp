/*
this সেই object কে উল্লেখ করে ফাংশনটি যার একটি property. 

অন্য কথায়, this সেই object কে refer করে যা বর্তমানে ফাংশনটিকে কল করছে।

ধরুন আপনার counter নামক একটি object আছে। এই counter object এ next() নামে একটি method আছে।

যখন আপনি next() method কল করেন, আপনি এই object টি অ্যাক্সেস করতে পারেন।
*/

const counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next(); // 1
counter.next(); // 2
counter.next(); // 3
