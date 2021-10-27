### Factory Pattern

আজকের আলোচনার বিষয় হচ্ছে জাভাস্ক্রিপ্টের Factory Pattern. জাভাস্ক্রিপ্ট প্রোগ্রামার বা ডেভেলপার হিসাবে Factory Pattern সম্পর্কে পরিষ্কার ধারণা থাকা খুব প্রয়োজন। তাই চেষ্টা করবো আজকে practical উদাহরণ দিয়ে এই মেথডকে নিয়ে আলোচনা করতে। আশা করি, আজকের পর থেকে এই Factory Pattern নিয়ে কাজ করতে কখনো সমস্যা হবে না।

ধরা যাক, আমাদের কাছে একটি circle নামে একটি Object আছে। circle Object টিতে draw নামে একটি মেথড এবং radius নামে একটি variable আছে।

```js

const circle = {
  radius: 1,
  draw: function draw() {
    console.log(`Circle radius is ${this.radius}`);
  },
};
console.log(circle.draw());  


/// output: Circle radius is 1

```
উপরের কোড থেকে দেখতে পাচ্ছি যে, circle Object এর draw মেথডটিকে call করে আমরা circle এর radius টি print করতে পারছি। এখন আমরা যদি circle2 নামে এ একই Functionality এর আরও একটি Object create করতে চাই তাহলে ঠিক একই রকম করে আবার নতুন করে Object এর structure টা লিখতে হবে। অনেকটা এই রকম করে,

```js

const circle2 = {
  radius: 5,
  draw: function draw() {
    console.log(`Circle2 radius is ${this.radius}`);
  },
};
console.log(circle2.draw());  /// output: Circle2 radius is 5

```

circle এবং circle2 এই দুইটি Object এর কোড যদি একটু লক্ষ্য করি তবে দেখব যে, এখানে বেশ repetative কোড আছে। তাছাড়া এখানে মাত্র একটি মেথড রয়েছে কিন্তু যদি এইখানে আরও অনেক মেথড থাকত এবং প্রত্যেক মেথডে অনেক কোড থাকত তবে আমাদের একই কোড বারবার লিখতে হত। এছাড়াও যদি কোনও মেথডের লজিক পরিবর্তন করার দরকার হয় তবে একাধিক জায়গায় কোড পরিবর্তন করতে হবে যা খুবই সময় সাপেক্ষ এবং বিরক্তিকর। তাই না।
সুতরাং যদি আমাদের Object এ লজিক থাকে তবে আমাদের এখন ভিন্ন একটা পদ্ধতি দরকার যার মাধ্যমে আমরা Object বানাতে পারি। ঠিক এই সময়ে আমরা Factory বা Constructor ফাংশন ব্যবহার করি। এই আলোচনাতে আমরা Factory ফাংশন নিয়ে কথা বলব।

### Factory Pattern

সহজভাবে বলতে গেলে, Factory Function এমন একটি ফাংশন যা Class বা new Keyword এর জটিলতা ছাড়াই Object তৈরি করতে পারে । অন্যভাবে বলতে গেলে, জাভাস্ক্রিপ্টের যেকোন Function-ই Object return করতে পারে কিন্তু যখন কোন Function এই একই কাজ new Keyword ছাড়া করতে পারে তাকেই আমরা Factory Function বলব। Factory Function ব্যবহার করে Object তৈরি করার প্রক্রিয়াই আসলে Factory Pattern.

Factory যেমন বিভিন্ন জিনিস তৈরি করতে পারে ঠিক তেমনি জাভাস্ক্রিপ্টের Factory Function বিভিন্ন Object তৈরি করতে পারে। জটিল মনে হলেও ভয় পাওয়ার কিছু নেই একটা উদাহরণ দেখলে সব ক্লিয়ার হয়ে যাবে।


প্রথমে আমারা একটি Function বানাবো যার নাম হবে createCircle.

```js

function createCircle(){
}

```
এরপর createCircle Factory Function এর মধ্যে আমরা আমাদের circle Object এর Defination টা বসিয়ে return করব।
 
 ```js

function createCircle(){
    const circle = {
        radius: 1,
        draw: function draw() {
            console.log(`Circle radius is ${this.radius}`);
        },
    };
    return circle;
}

```

এখন যখনই আমরা createCircle Factory Function কে call করব আমরা একটা circle Object পাব। কিন্তু আমারা এখানে circle Object এর radius এর মানটা hardcoded করে রেখেছি ফলে যে circle Object তৈরি হবে তার radius সবসময় একই হবে। সুতরাং আমাদের কোডটাকে ডাইনামিক করতে হবে যাতে আমরা যে কোন radius এর circle Object তৈরি করতে পারি। এক্ষেত্রে আমরা createCircle Factory Function এ প্যারামিটার হিসেবে radius এর মানটা পাঠাতে পারি।

```js

function createCircle(radius){
    const circle = {
        radius: radius,
        draw: function draw() {
            console.log(`Circle radius is ${this.radius}`);
        },
    };
    return circle;
}

const circle1 = createCircle(5);
console.log(circle1.draw());


//
// output:  Circle radius is 5
//
//

```

Factory Function এর সৌন্দর্য হল আমরা আমাদের Object এর লজিকগুলো এক জায়গায় সংজ্ঞায়িত করেছি। সুতরাং আমরা এখন createCircle Factory Function কে বিভিন্ন মান বা বিভিন্ন আর্গুমেন্ট দিয়ে কল করে বিভিন্ন circle Object পেতে পারি। কিন্তু একটু লক্ষ্য করলে দেখা যাবে যে, আমরা draw মেথড শুধুমাত্র একটি জায়গায় সংজ্ঞায়িত করেছি। সুতরাং, যদি এই পদ্ধতিতে যদি কোন Bug থাকে যা ভবিষ্যতে আমাদের ঠিক করতে হবে সেখানে শুধুমাত্র একটি জায়গাতে সংশোধন করলেই হবে। নিচের উদাহরণটি দেখলে ব্যাপারটি আরও পরিষ্কার হবে। 

```js

function createCircle(radius){
    const circle = {
        radius: radius,
        draw: function draw() {
            console.log(`Circle radius is ${this.radius}`);
        },
    };
    return circle;
}

const circle1 = createCircle(5);
console.log(circle1.draw());
const circle2 = createCircle(10);
console.log(circle2.draw());

//
// output:
// Circle radius is 5
// Circle radius is 10
// 


```

উপরের কোড এর আউটপুটটা দেখুন, দুইটি circle Object তৈরি হয়েছে। এভাবে যত খুশি তত circle Object তৈরি করা যাবে। এই ছিল Factory Pattern নিয়ে আজকের লেখা। হ্যাপি কোডিং।
