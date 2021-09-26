//ex:1
let counter = 0;
function add() {
  counter += 1;
}
add();
console.log(counter)
add();
console.log(counter)
add();
console.log(counter)
{/*
output:
1
2
3
*/}


//ex:2
function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  
  add();
  add();
  add();
  console.log(counter)
{/*
output:
1
*/}
