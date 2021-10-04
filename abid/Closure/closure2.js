let parent = (y) => {
  let x = 10;
  let child = () => {
    console.log(y + 10); // output : 22
  };
  child();
};
parent(12);
