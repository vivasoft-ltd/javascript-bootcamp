/* নিম্নলিখিত Bike ফাংশনের */

function Bike(brand) {
  this.brand = brand;
}

Bike.prototype.getBrand = function () {
  return this.brand;
};

/*
এক্সপ্রেশন new Bike("TVS") হল Bike ফাংশনের একটি constructor invocation।
*/

var bike = new Bike("TVS");
console.log(bike.getBrand()); // TVS

/*
এখন, আপনি একটি function বা constructor হিসাবে Bike() invoke করতে পারেন।
আপনি যদি new কীওয়ার্ডটি বাদ দেন তাহলে:
*/

var discover = Bike("Discover");
console.log(discover.brand);

// Uncaught TypeError: Cannot read properties of undefined (reading 'brand')

/*
এই সমস্যার সমাধান:
Bike() ফাংশন সবসময় কনস্ট্রাক্টর call করা হয়েছে তা নিশ্চিত করার জন্য, আপনি Bike() ফাংশনের শুরুতে একটি চেক যোগ করুন নিম্নরূপ:
*/

function Bike(brand) {
  if (!(this instanceof Bike)) {
    throw Error("Must use the new operator to call the Bike function");
  }
  this.brand = brand;
}
