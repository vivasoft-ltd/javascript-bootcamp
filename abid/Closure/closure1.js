let parent = () => {
  let x = 10;
  let child = () => {
    console.log(x + 13); // output : 23
  };
  child();
};
parent();
