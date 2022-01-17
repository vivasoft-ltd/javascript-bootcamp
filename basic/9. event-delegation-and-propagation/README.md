### Event delegation and propagation

ইভেন্ট delegation ইভেন্ট propagation পদ্ধতি ব্যবহার করে। ইভেন্ট delegation কীভাবে কাজ করে তা বোঝার জন্য, আমাদেরকে প্রথমে ইভেন্ট propagation বুঝতে হবে।


### Event propagation
আপনি যখন নিম্নলিখিত HTML এর button টি ক্লিক করেনঃ
```
<html>
  <body>
    <div id="buttons">
      <button class="buttonClass">Click me</button>
    </div>
  </body>
</html>
```

একটি ক্লিক ইভেন্ট কতগুলি element এ ট্রিগার হয়? button টি নিজেই একটি ক্লিক ইভেন্ট পায়। কিন্তু এছাড়াও ঐ button এর সকল ancestors এবং এমনকি document ও window অবজেক্ট ক্লিক ইভেন্ট পায়।

একটি ক্লিক ইভেন্ট 3টি পর্যায়ে প্রচারিত হয়:
1. Capture phase — window, document এবং root element থেকে শুরু করে ইভেন্ট টার্গেট এলিমেন্টের ancestor মধ্য দিয়ে নিচে নেমে যায়।
2. Target phase — ব্যবহারকারী যে element টিতে ক্লিক করেছেন তাতে ইভেন্টটি ট্রিগার হয়।
3. Bubble phase — অবশেষে, root element, document এবং window পর্যন্ত target element এর ancestor এর মাধ্যমে event টি bubble up হয়ে যায়।

![image](https://user-images.githubusercontent.com/712313/143814244-4e801a09-f50f-4d87-8503-2686d5f0f1db.png)

নিম্নলিখিত ইভেন্ট হ্যান্ডলার <body> element এ সংঘটিত ক্যাপচার পর্বে ক্লিক ইভেন্টের জন্য শোনে
  ```
  document.body.addEventListener('click', () => {
    console.log('Body click event in capture phase');
  }, true);
  ```
  
নিচের method এর তৃতীয় আর্গুমেন্ট হল `captureOrOptions` আপনাকে বিভিন্ন পর্যায় থেকে ইভেন্টগুলি ধরতে দেয়:
```
element.addEventListener(eventType, handler, [captureOrOptions]);
```
  
- যদি captureOrOptions argument টি  missing, false বা { capture: false } হয়, তাহলে listener target এবং bubble phase এর event গুলি ক্যাপচার করে
- যদি argument টি true হয় বা { capture: true } হয়, তাহলে listener ক্যাপচার পর্বের ঘটনাগুলি শোনে।
  
  তাহলে, কিভাবে ইভেন্ট propagation একাধিক button এর event ক্যাপচার করতে সাহায্য করে?
  অ্যালগরিদম টি সহজ: ইভেন্ট লিসেনারকে button এর parent এর সাথে সংযুক্ত করুন, এবং একটি button ক্লিক করা হলে bubble ইভেন্ট ধরতে হবে। ঠিক এভাবেই ইভেন্ট delegation কাজ করে।
  
  
### Event delegation
আসুন একাধিক button এ ক্লিকগুলি ধরতে ইভেন্ট delegation ব্যবহার করি:
  
  ```
  <div id="buttons"> 
    <button class="buttonClass">Click me</button>
    <button class="buttonClass">Click me</button>
    <!-- buttons... -->
    <button class="buttonClass">Click me</button>
  </div>
  <script>
    document.getElementById('buttons')
      .addEventListener('click', event => { 
        if (event.target.className === 'buttonClass') { 
          console.log('Click!');
        }
      });
  </script>
  ```


  
ইভেন্ট delegation mechanism টি অনেক সহজ. ইভেন্ট listener দের সরাসরি button গুলিতে সংযুক্ত করার পরিবর্তে, আপনি parent <div id="buttons"> listen delegate করেন। যখন একটি এ ক্লিক করা হয়, তখন মূল element টির listener bubble ইভেন্টটি ধরে।
  
ইভেন্ট delegation ব্যবহার করার জন্য 3টি পদক্ষেপ প্রয়োজন:
  
**Step 1. ইভেন্টগুলি দেখার জন্য element গুলির parent নির্ধারণ করুন৷**
উপরের উদাহরণে, <div id="buttons"> হল button গুলির parent element
  
**Step 2. ইভেন্ট listener কে মূল element এর সাথে সংযুক্ত করুন**
  
```document.getElementById('buttons').addEventListener('click', handler)```
ইভেন্টটি লিসেনারকে button এর parent element এর সাথে সংযুক্ত করে। এই listener button ক্লিকে প্রতিক্রিয়া দেখায় কারণ button ক্লিক ইভেন্ট ancestor এর মাধ্যমে bubble করে event propagation এর কারণে।
**Step 3. target element নির্বাচন করতে event.target ব্যবহার করুন**
 
যখন একটি button ক্লিক করা হয়, হ্যান্ডলার ফাংশন একটি event object argument এর সঙ্গে invoke হয়. event.target.property হল সেই element যার উপর ইভেন্টটি পাঠানো হয়েছে, যা উদাহরণে একটি button 
```
  .addEventListener('click', event => {
    if (event.target.className === 'buttonClass') {
      console.log('Click!');
    }
  });
```  
  
 `event.currentTarget` সেই element টিকে নির্দেশ করে যেখানে ইভেন্ট listener সরাসরি সংযুক্ত থাকে। উদাহরণে, `event.currentTarget` হল `<div id="buttons">`। 
  
 
  
