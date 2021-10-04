"use strict";
function myFunction() {
  console.log(this);
}
myFunction();
// output : undefined

// in use strict mode this is undefined
