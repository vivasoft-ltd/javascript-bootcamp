
```JavaScript
let num = 5;

const changeNum = () => {
    let num;
    num = 72;
    console.log(num);
}

changeNum();
console.log(num);
```

উপরের কোডের আউটপুট কি হবে? যদি changeNum() ফাংশনের ভেতরে গ্লোবাল ভ্যারিয়েবল num -এর মান পরিবর্তন না হয় তাহলে আমরা কিভাবে সেটা করতে পারবো? 