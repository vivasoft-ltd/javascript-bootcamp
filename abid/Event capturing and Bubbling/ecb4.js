document.querySelector("#parent4").addEventListener(
  "click",
  () => {
    console.log("parent4 is clicked");
  },
  false //bubbling
);
document.querySelector("#parent3").addEventListener(
  "click",
  () => {
    console.log("parent3 is clicked");
  },
  true //capturing
);
document.querySelector("#parent2").addEventListener(
  "click",
  () => {
    console.log("parent2 is clicked");
  },
  true //bubbling
);
document.querySelector("#parent1").addEventListener(
  "click",
  () => {
    console.log("parent1 is clicked");
  },
  true //capturing
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child is clicked");
  },
  true //capturing
);

// output : (if we click parent1)
// parent3 is clicked
// parent2 is clicked
// parent1 is clicked
// parent4 is clicked

// Tricks to solve true, flase mixed problems :
// 1. whoever you click, the output will show from that item upto the outest parent.
// 2. first task - mark the true or captured items. arrange them into capturing order.
// 3. second task - mark the rest false or bubbled items. arrange them into bubbling order.
// 4. boom and you will get the answer 😀
