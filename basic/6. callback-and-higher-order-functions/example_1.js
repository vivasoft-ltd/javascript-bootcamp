/* এখানে circleArea এবং squareArea ফাংশন দুটি হচ্ছে Callback ফাংশন
   আর areaCalculate ফাংশনটি হচ্ছে Higher Order ফাংশন
*/

function areaCalculate(arrayWidth, callback) {
  const area = arrayWidth.map((x) => callback(x));
  return area;
}

function circleArea(radius) {
  return Math.PI * radius * radius;
}

function squareArea(side) {
  return side * side;
}

const array = [2, 6, 7, 8, 3, 1, 5];

var circleAreaArray = areaCalculate(array, circleArea);
console.log(circleAreaArray);

var squareAreaArray = areaCalculate(array, squareArea);
console.log(squareAreaArray);

console.log(array);

/*
Output:
[12.566370614359172, 113.09733552923255, 153.93804002589985, 201.06192982974676, 28.274333882308138, 3.141592653589793, 78.53981633974483]
[4, 36, 49, 64, 9, 1, 25]
[2, 6, 7, 8, 3, 1, 5]
*/
