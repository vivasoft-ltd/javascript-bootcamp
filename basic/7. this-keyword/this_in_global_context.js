/* Global context এ this */

console.log(this === window); // true

this.color = "Green";

console.log(this.color); // 'Green'
console.log(window.color); // 'Green'
