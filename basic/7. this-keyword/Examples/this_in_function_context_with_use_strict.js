/* Function context এ this with 'use strict' mode */

function show() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
    console.log(this === undefined); // true
  }
  display();
}

show();
