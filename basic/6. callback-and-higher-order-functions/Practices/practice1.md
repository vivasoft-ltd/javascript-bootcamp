
নীচের কোডে higherOrderFunction() ফাংশনটি আসলে কোন ধরনের ফাংশন সেটি যাচাই করার চেষ্টা করুন। এবার নীচের কোডের আউটপুট কি হবে সেটা বের করার চেষ্টা করুন। 

```js

function higherOrderFunction() {
    let myName = 'Robindranath Thagore';

    function displayName() {
        console.log(myName);
    }

    return displayName();
}

let viewName = higherOrderFunction();
viewName(); 

```

আসলে উপরের কোডের higherOrderFunction() ফাংশনটি একটি সাধারণ ফাংশন, এটি আসলে Higher-Order Function নয়। এমতাবস্থায় higherOrderFunction() ফাংশনটিকে Higher-Order Function বানাতে হলে কোথায় পরিবর্তন করতে হবে সেটার সমাধান করুন।