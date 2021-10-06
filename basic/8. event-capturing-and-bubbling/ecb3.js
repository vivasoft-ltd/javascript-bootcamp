// Event Bubbling
document.querySelector("#parent4").addEventListener(
  "click",
  () => {
    console.log("parent4 is clicked");
  },
  true
);
document.querySelector("#parent3").addEventListener(
  "click",
  () => {
    console.log("parent3 is clicked");
  },
  true
);
document.querySelector("#parent2").addEventListener(
  "click",
  () => {
    console.log("parent2 is clicked");
  },
  true
);
document.querySelector("#parent1").addEventListener(
  "click",
  () => {
    console.log("parent1 is clicked");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child is clicked");
  },
  true
);

// by default capturing is selected as addEventListener's 3rd parameter is considered false

// output : (if we click parent1)
// parent4 is clicked
// parent3 is clicked
// parent2 is clicked
// parent1 is clicked
