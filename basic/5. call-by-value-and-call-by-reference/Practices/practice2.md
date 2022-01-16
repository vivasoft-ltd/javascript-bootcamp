নীচের প্রোগ্রামের আউটপুট কি হবে? যদি বুঝতে না পারেন তবে একটু একটু করে ডিবাগ করার চেষ্টা করুন।

```js

let parentProperty = {
  house: ['Dhaka', 'Khulna', 'Sylhet'],
  car: 2
}

let childProperty = parentProperty;
childProperty.car = 3;
childProperty.bike = ['Yamaha', 'Honda'];

console.log(parentProperty === childProperty); // True or False?
parentProperty = childProperty;
console.log(parentProperty === childProperty); // True or False?

```


এবার নীচের কোডের আউটপুট কি হবে সেটা বের করো।

```js

let num = 1100;

(function changeValue(num) {
  num = 1011;
})(num);

console.log(num);

```