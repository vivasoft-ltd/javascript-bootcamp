function foo() {
  console.log(this); //window object
}
foo();

let xoo = () => {
  console.log(this); //window object
};
xoo();

// inside a function this always point to the window object
