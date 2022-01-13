/* Call By Value of primitives types এর উদাহরণ */

function cube(a) {
  a = a * a * a;
  return a;
}

var x = 10;

var result = cube(x);

console.log(x); //a = 10 which is unchanged

console.log(result); // 1000

/* Call By Reference of non-primitives types  এর উদাহরণ */

function switchOn(device) {
  device.isOn = true;
}

var phone = {
  isOn: false,
};

switchOn(phone);

console.log(phone.isOn); // true;
