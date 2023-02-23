### Event capturing and bubbling

ইভেন্ট bubbling এবং ক্যাপচারিং HTML DOM API-এ ইভেন্ট প্রচারের দুটি উপায়, যখন একটি event অন্য element এর  ভিতরে একটি element এ ঘটে, এবং উভয় element সেই ইভেন্টের জন্য একটি হ্যান্ডেল নিবন্ধিত করেছে. ইভেন্ট propagation মোড নির্ধারণ করে কোন ক্রমে elements গুলি ইভেন্টটি গ্রহণ করে. bubbling এ, event টি প্রথমে অন্তরতম element দ্বারা বন্দী এবং পরিচালনা করা হয় এবং তারপরে বাইরের element গুলিতে প্রচার করা হয়. Capturing এ, event টি সর্বপ্রথম বাইরের element দ্বারা ধারণ করা হয় এবং ভিতরের element গুলিতে প্রচার করা হয়. আমরা ব্যবহার করতে পারি addEventListener(type, listener, useCapture) bubbling(ডিফল্ট) বা ক্যাপচারিং মোডে ইভেন্ট হ্যান্ডলারদের নিবন্ধন করতে. ক্যাপচারিং মডেল ব্যবহার করতে তৃতীয় argument টিকে true হিসাবে পাস করুন.

উদাহরণঃ
```html
<div id="p1">  
  <button id="c1">I am child button</button>  
</div>
```
উপরের কাঠামোতে, অনুমান করুন যে button element টিতে একটি ক্লিক ইভেন্ট ঘটেছে।
ক্যাপচারিং মডেলে, ইভেন্টটি প্রথমে ডিভ দ্বারা পরিচালনা করা হবে, তারপর টার্গেট এলিমেন্ট button এ শেষ পর্যন্ত  পরিচালনা করা হবে.
bubbling মডেলে, বিপরীত ঘটবে: ইভেন্টটি প্রথমে button দ্বারা পরিচালনা করা হবে, তারপরে ডিভ element দ্বারা.

#### Event Capturing
ইভেন্ট ক্যাপচারিং-এ, একটি ইভেন্ট সবচেয়ে বাইরের element থেকে target এ চলে যায়. ইভেন্ট bubbling করার আগে ইভেন্ট ক্যাপচারিং করা হয় কিন্তু ক্যাপচারিং খুব কমই ব্যবহার করা হয় কারণ ইভেন্ট bubbling ইভেন্ট ফ্লো পরিচালনা করার জন্য যথেষ্ট।

ইভেন্ট ক্যাপচারিং এর কাজ বোঝার জন্য একটি উদাহরণ কোড দেখি:
```html
<body>  
  <div id="p1">  
    <button id="c1">I am Child</button>  
  </div>  
    
  <script>  
    var parent = document.querySelector('#p1');  
    var child = document.querySelector('#c1');  
  
    parent.addEventListener('click', function(){  
      console.log("Parent is invoked");  
    }, true);

    child.addEventListener('click', function(){  
      console.log("Child is invoked");  
    });  
  </script>  
</body>  
```
**Output:**

![image](https://user-images.githubusercontent.com/712313/142607809-7e76f19f-021f-46c1-a2b8-2d78098b3321.png)

 - HTML অংশে, আমরা একটি div id ধারণ করে id = p1 তৈরি করেছি। div-এর ভিতরে, আমরা নেস্ট করেছি এবং id = c1 সহ একটি button তৈরি করেছি।
 - JS কোডে, প্রাথমিকভাবে, আমরা html elements গুলি assign করেছি, অর্থাৎ, p1 id, querySelector () পদ্ধতি ব্যবহার করে একটি variable parent এর  কাছে 
এবং আমরা একই কাজ করেছি - c1 আইডি দিয়ে যেখানে আমরা এটি একটি child variable assign করেছি.
 - তারপরে আমরা একটি ক্লিক ইভেন্ট ব্যবহার করেছি এবং এটি p1 div এবং c1 button উভয়ের সাথে সংযুক্ত করেছি. কনসোলে উপযুক্ত message প্রিন্ট করার জন্য একটি ফাংশনও রয়েছে. এর মানে যদি চাইল্ড ইভেন্টটি প্রথমে invoke হয়, তারপর এটি প্রথমে কনসোলে "Child is invoked" message টি প্রিন্ট করবে, এবং যদি প্যারেন্ট ইভেন্ট হ্যান্ডলারকে প্রথমে invoke হয়, এটি প্রথমে কনসোলে "Parent is invoked" message দেবে।
 - এর পরে, আমরা প্যারেন্ট div এ ইভেন্ট ক্যাপচারিং সক্ষম করার জন্য addEventListner () এর তৃতীয় আর্গুমেন্ট যোগ করেছি।
 - যখন আমরা button এ ক্লিক করি, এটি প্রথমে ফাংশনটি কার্যকর করে, যা প্যারেন্ট ডিভ-এ সংযুক্ত থাকে।
 - এর পরে, button টির অনক্লিক () ফাংশন run করে এবং এটা event ক্যাপচারের কারণে. ইভেন্ট ক্যাপচারিংয়ের কারণে, মূল event এর  event টি প্রথমে কার্যকর হয়, এব তারপর target element এর event কার্যকর করা হয়.

সুতরাং, যখন আমরা button এ ক্লিক করি, ক্লিক ইভেন্ট নিম্নলিখিত sequence এ সঞ্চালিত হয়, আপনি নীচের ফ্লোচার্ট দেখতে পারেন:

![image](https://user-images.githubusercontent.com/712313/142607966-a0227a6c-f5aa-4077-a694-6874fd34fe5c.png)

#### Evnet Bubbling:
ইভেন্ট bubbling এর কাজের ধারণাটি বোঝার জন্য আসুন নীচের উদাহরণটি দেখি:
```html
<body>  
  <div id="p1">  
    <button id="c1">I am child button</button>  
  </div>  
    
  <script>  
    var parent = document.querySelector('#p1');
    var child = document.querySelector('#c1');

    parent.addEventListener('click', function(){  
      console.log("Parent is invoked");  
    });  
  
    child.addEventListener('click', function(){  
      console.log("Child is invoked");  
    });  
  </script>  
</body>
```  
**Output:**

![image](https://user-images.githubusercontent.com/712313/142606233-d0f93544-18dc-49e1-83e5-4d636f61d46e.png)

- আমরা div id = p1 সহ একটি div ট্যাগ ব্যবহার করেছি এবং div-এর মধ্যে আমরা একটি button নেস্ট করেছি যার id = c1 আছে।
- এখনে আমরা querySelector() ফাংশন ব্যবহার করে html element গুলিকে (p1 এবং c1) যথাক্রমে parent এবং child নামক দুটি ভেরিয়েবলে assign করেছি।
- এর পরে, আমরা div ও button উভয়ের জন্য একটি করে ক্লিক ইভেন্ট তৈরি করেছি এবং কলব্যাক ফাংশন হিসেবে দুটি ফাংশন তৈরি করেছি যা আমাদের parent এবং child execution এর order জানতে সাহায্য করবে। এর অর্থ হল যদি চাইল্ড ইভেন্টটি প্রথমে কল হয়, "Child is invoked" লেখাটি ব্রাউজারের console -এ প্রিন্ট হবে অন্যথায় "Parent is invoked" প্রিন্ট হবে।
- এখন button টি ক্লিক করা হলে এটি প্রথমে "Child is invoked" প্রিন্ট করবে এবং পরে "Parent is invoked" প্রিন্ট করবে, অর্থাৎ প্রথমে button এর ইভেন্ট হ্যান্ডলার কাজ করবে তারপর div এর ইভেন্ট হ্যান্ডলারটি কাজ করবে।

ইভেন্ট bubbling এর কারণে এই ধরনের sequence টি ঘটেছে আর এভাবেই event bubbling সঞ্চালিত হয়। এর মানে ব্যবহারকারী যখন button এ ক্লিক করেন, ক্লিক ইভেন্ট এই ক্রমে নীচে থেকে উপরে প্রবাহিত হয়। নিচের ফ্লো চার্টের সাহায্যে আমরা ইভেন্টের প্রবাহ বুঝতে পারি:

![image](https://user-images.githubusercontent.com/712313/142606596-d3f2f583-6c89-41d7-b51a-17896f57a89e.png)



একটি ইভেন্টের সম্পূর্ণ প্রবাহ কিভাবে সম্পাদন হয় নীচের diagram টি দ্বারা সেটি দেখানো হলো:

![image](https://user-images.githubusercontent.com/712313/142607997-8b6caa69-3d3d-446c-a223-724218ff532e.png)
