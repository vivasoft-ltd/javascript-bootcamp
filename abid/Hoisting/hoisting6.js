foo(); // output : xyz
function foo() {
  console.log("xyz");
}
foo(); // output : xyz

//fx(); // output : Uncaught ReferenceError
let fx = () => {
  console.log("function fx");
};
fx(); // output : function fx

// fy(); // output : Uncaught ReferenceError
var fy = () => {
  console.log("function fy");
};
fy(); // output : function fy
