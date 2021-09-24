var a="have a nice day";
function hoisting(){
  var a="Good morning";
  console.log(a)
}
hoisting();//Good morning

//
var a="have a nice day";
function hoisting(){
  console.log(a)
  var a="Good morning";
  
}
hoisting(); //undefined

//
var a="have a nice day";
function hoisting(){
  console.log(a)
  
  
}
hoisting();//have a nice day
