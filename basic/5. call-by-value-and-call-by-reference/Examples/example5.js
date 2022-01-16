/*

Call by value বিষয়টি Primitive ডাটা টাইপের সাথে জড়িত। আবার Call by reference বিষয়টি Non-primitive বা Reference ডাটা টাইপের সাথে জড়িত। বিষয় দুটি বোঝার জন্য একটু অন্যভাবে চিন্তা করি। 

মনে করুন, আমি Google Doc এ একটি ফাইল খুলেছি এবং সেটাতে আপনাকেও এডিট করার পারমিশন দিয়েছি। এখন ফাইলটিতে আপনি বা আমি যেই কোন কিছু লিখি বা পরিবর্তন করি না কেন সেটা আমাদের দুজনের দিক থেকেই পরিবর্তন হবে। বিষয়টি এমন হবে না যে আপনি দেখলে এক রকম হবে আর আমি দেখলে অন্য রকম হবে। এই বিষয়টি ঠিক Call by reference এর মতো। আবার অন্যদিকে, আমার কাছে থাকা একটি ফাইলের কপি আমি আপনাকে দিলাম অর্থাৎ কপি মূলত দুটি, একটি আপনার আর অন্যটি আমার। সুতরাং আমি যদি আমার ফাইলে কোন পরিবর্তন করি তবে সেটি শুধুমাত্র আমার ফাইলেই পরিবর্তন হবে, আপনারটা যেমন ছিল বা আপনি যেভাবে পরিবর্তন করেছেন সেভাবেই থাকবে। আমাদের কারো পরিবর্তন একে অন্যের উপর কোন প্রভাব ফেলবে না। এই বিষয়টি Call by value এর মতো। আশাকরি এখন বিষয় দুটি বুঝতে কোন সমস্যা হবে না। চলুন একটা উদাহরণ দেখিঃ

*/

// Call By Value Part 
let primitiveData = 200;

(function callByValue(primitiveData) {
    primitiveData = 404;
})(primitiveData);

console.log(primitiveData); // Output: 200


// Call By Reference Part 
let nonPrimitiveData = ['Abid', 'Shahan', 'Imrul', 'Biplob'];

(function callByReference(nonPrimitiveData) {
    nonPrimitiveData[0] = 'Tareq';
    nonPrimitiveData.push('Tajnur');
})(nonPrimitiveData);

console.log(nonPrimitiveData); // Output: [ 'Tareq', 'Shahan', 'Imrul', 'Biplob', 'Tajnur' ]