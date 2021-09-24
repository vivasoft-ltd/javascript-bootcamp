function run() {
 
  const two = 2;
  let count = 0;
  function run2() {}

  console.log(two);   // 2
  console.log(count); // 0
  console.log(run2);  // function
}

run();
console.log(two);   // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2);  //throws ReferenceError