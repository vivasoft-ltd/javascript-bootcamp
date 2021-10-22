/* Function context এ this without 'use strict' mode */

function show() {
  console.log(this === window); // true
}

show(); // true
window.show(); //true
